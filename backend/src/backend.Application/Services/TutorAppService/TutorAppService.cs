﻿using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.IdentityFramework;
using backend.Authorization.Users;
using backend.Domain.Model;
using backend.Services.StudentAppService.Dto;
using backend.Services.TutorAppService.Dto;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.TutorAppService
{
    public class TutorAppService : ApplicationService, ITutorAppService
    {

        public readonly IRepository<Tutor, Guid> _repository;
        private readonly UserManager _userManager;

        public TutorAppService(IRepository<Tutor, Guid> repository, UserManager userManager)
        {
            _repository = repository;
            _userManager = userManager;
        }

        public async Task<TutorDto> CreateTutorAsync(CreateTutorDto input)
        {
            var student = ObjectMapper.Map<Tutor>(input);
            student.IdentityNo = "0000000000000";
            input.Username = student.Username = input.Email;
            input.Password = student.Password = "Innminds@7072";
            student.User = await CreateUser(input);
           
            return ObjectMapper.Map<TutorDto>(await _repository.InsertAsync(student));
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public async Task<List<TutorDto>> GetAllTutorAsync(string?searchTerm)
        {
            var query = _repository.GetAllIncluding().AsQueryable();

            if (string.IsNullOrEmpty(searchTerm) == false)
            {
                query = query.Where(x => x.Email.Contains(searchTerm) ||
                        x.Name.Contains(searchTerm) ||
                        x.Username.Contains(searchTerm) ||
                        x.PhoneNumber.Contains(searchTerm) ||
                        x.Surname.Contains(searchTerm));
            }
            var users = await query.ToListAsync();
            return ObjectMapper.Map<List<TutorDto>>(users);
        }

        public async Task<TutorDto> GetTutorAsync(Guid id)
        {
            var user = await _repository.GetAsync(id);
            if (user == null)
            {
                return null;

            }

            return ObjectMapper.Map<TutorDto>(user);
        }

        public Task<TutorDto> UpdateTutorAsync(TutorDto input)
        {
            throw new NotImplementedException();
        }

        public async Task<User> CreateUser(CreateTutorDto input)
        {
            var user = ObjectMapper.Map<User>(input);
            ObjectMapper.Map(input, user);
            string[] RoleNames = { "ITUTOR" };

            //check if properties email and username not null or empty 
            if (!string.IsNullOrEmpty(user.NormalizedUserName) && !string.IsNullOrEmpty(user.NormalizedEmailAddress))
            {
                user.SetNormalizedNames();
            }

            CheckErrors(await _userManager.CreateAsync(user, input.Password));
            CheckErrors(await _userManager.SetRolesAsync(user, RoleNames));
            CurrentUnitOfWork.SaveChanges();
            return user;
        }

        protected virtual void CheckErrors(IdentityResult result) => result.CheckErrors(LocalizationManager);
    }
}
