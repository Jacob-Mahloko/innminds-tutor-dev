using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Abp.IdentityFramework;
using backend.Authorization.Users;
using backend.Domain.Model;
using backend.Services.AdminAppService.Dto;
using backend.Services.StudentAppService.Dto;
using backend.Services.StudentClassRoomAppService.Dto;
using backend.Services.SubjectAppService;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.StudentAppService
{
    public class StudentAppService : ApplicationService, IStudentAppService
    {

        public readonly IRepository<Student, Guid> _repository;
        private readonly IRepository<ClassRoom, Guid> _classRoomRepository;
        private readonly UserManager _userManager;
        private readonly StudentClassRoomAppService.StudentClassRoomAppService _studentClassRoomAppService;

        public StudentAppService(IRepository<Student, Guid> repository,IRepository<ClassRoom,Guid> classRoomRepository, UserManager userManager,StudentClassRoomAppService.StudentClassRoomAppService studentClassRoomAppService)
        {
            _repository = repository;
            _classRoomRepository = classRoomRepository;
            _userManager = userManager;
            _studentClassRoomAppService = studentClassRoomAppService;
        }

        public async Task<StudentDto> CreateStudentAsync(CreateStudentDto input)
        {
            var student = ObjectMapper.Map<Student>(input);

            student.IdentityNo = "0000000000000";
            input.Username=student.Username=input.Email;
            input.Password=student.Password = "Innminds@7072";
            input.About = student.About = "Please write something about you";
            student.User = await CreateUser(input);
            var newStudent = await _repository.InsertAsync(student);
            //add student to class rooms
            CurrentUnitOfWork.SaveChanges();

            foreach (var subjectId in input.subjectIds)
            {
                var room = await _classRoomRepository.FirstOrDefaultAsync(x => x.Subject.Id == subjectId);
                var studentClassRoomDto = new CreateStudentClassRoomDto()
                {
                    ClassRoomId = room.Id,
                    StudentId = newStudent.Id
                };
                await _studentClassRoomAppService.CreateAsync(studentClassRoomDto);
                CurrentUnitOfWork.SaveChanges();
            }

               

            return ObjectMapper.Map<StudentDto>(newStudent);
        }

        public async Task<List<StudentDto>> GetAllStudentAsync(string? searchTerm)
        {
            var query = _repository.GetAllIncluding().AsQueryable();

            if (searchTerm.IsNullOrEmpty() == false)
            {
                query = query.Where(x => x.Email.Contains(searchTerm) ||
                        x.Grade.Contains(searchTerm) ||
                        x.Name.Contains(searchTerm) ||
                        x.Username.Contains(searchTerm) ||
                        x.PhoneNumber.Contains(searchTerm) ||
                        x.Surname.Contains(searchTerm));
            }
            var users = await query.ToListAsync();

            return ObjectMapper.Map<List<StudentDto>>(users);
        }

        public async Task<StudentDto> GetStudentAsync(Guid id)
        {
            var user = await _repository.GetAsync(id);
            if (user == null)
            {
                return null;

            }

            return ObjectMapper.Map<StudentDto>(user);
        }

        public async Task<StudentDto> GetCurrentStudentAsync()
        {
            var user = await _repository.FirstOrDefaultAsync(x=>x.User.Id==AbpSession.UserId);
            if (user == null)
            {
                return null;

            }

            return ObjectMapper.Map<StudentDto>(user);
        }
        public Task<StudentDto> UpdateStudentAsync(StudentDto input)
        {
            throw new NotImplementedException();
        }
        public async Task<User> CreateUser(CreateStudentDto input)
        {
            var user = ObjectMapper.Map<User>(input);
            ObjectMapper.Map(input, user);
            string[] RoleNames = { "ISTUDENT" };

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
