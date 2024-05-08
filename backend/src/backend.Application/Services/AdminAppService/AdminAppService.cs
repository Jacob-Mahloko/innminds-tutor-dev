using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.IdentityFramework;
using Abp.UI;
using backend.Authorization.Roles;
using backend.Authorization.Users;
using backend.Domain.Model;
using backend.Services.AdminAppService.Dto;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.AdminAppService
{
    /// <summary>
    /// 
    /// </summary>
    public class AdminAppService:ApplicationService, IAdminAppService
    {
        public readonly IRepository<Admin,Guid> _repository;
        private readonly UserManager _userManager;

        public AdminAppService(IRepository<Admin, Guid> repository, UserManager userManager)
        {
            _repository = repository;
            _userManager = userManager;
        }



        /// <summary>
        /// 
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<AdminDto> CreateAdminAsync(CreateAdminDto input)
        {
            var admin = ObjectMapper.Map<Admin>(input);
            admin.User = await CreateUser(input);
            return ObjectMapper.Map<AdminDto>(await _repository.InsertAsync(admin));
        }

        public async Task<AdminDto> GetAdminAsync(Guid id)
        {
            var user= await _repository.GetAsync(id);
            if (user == null)
            {
               return null;

            }

            return ObjectMapper.Map<AdminDto>(user);
        }

        public async Task<List<AdminDto>> GetAllAdminAsync()
        {
            var users = await _repository.GetAllListAsync();
            return ObjectMapper.Map<List<AdminDto>>(users);

        }

        public Task<AdminDto> UpdateAdminAsync(AdminDto input)
        {
            throw new NotImplementedException();
        }

        public async Task<User> CreateUser(CreateAdminDto input)
        {
            var user = ObjectMapper.Map<User>(input);
            ObjectMapper.Map(input, user);

            string[] RoleNames = { "IADMIN","ITUTOR","ISTUDENT"}; 

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
