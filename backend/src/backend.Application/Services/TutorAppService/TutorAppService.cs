using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.IdentityFramework;
using backend.Authorization.Users;
using backend.Domain.Model;
using backend.Services.StudentAppService.Dto;
using backend.Services.TutorAppService.Dto;
using Microsoft.AspNetCore.Identity;
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
            student.User = await CreateUser(input);
            return ObjectMapper.Map<TutorDto>(await _repository.InsertAsync(student));
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public async Task<List<TutorDto>> GetAllTutorAsync()
        {
            var users = await _repository.GetAllListAsync();
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
            string[] RoleNames = { "ITUTOR", "ISTUDENT" };

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
