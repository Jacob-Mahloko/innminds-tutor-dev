
using AutoMapper;
using backend.Authorization.Users;
using backend.Domain.Model;
using backend.Services.AdminAppService.Dto;
using backend.Services.StudentAppService.Dto;
using backend.Services.TutorAppService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services
{
    /// <summary>
    /// 
    /// </summary>
    public class AutoMAppingProfile:Profile
    {
        /// <summary>
        /// 
        /// </summary>
       public AutoMAppingProfile()
        {
            ///
            /// Admin autoprofile
            ///

            CreateMap<Admin,AdminDto>().ReverseMap();
            CreateMap<Admin,CreateAdminDto>().ReverseMap();
            CreateMap<CreateAdminDto, User>()
                .ForMember(d => d.Name, s => s.MapFrom(s => s.Name))
                .ForMember(d => d.Surname, s => s.MapFrom(s => s.Surname))
                .ForMember(d => d.UserName, s => s.MapFrom(s => s.Username))
                .ForMember(d => d.FullName, s => s.MapFrom(s => s.Name + " " + s.Surname))
                .ForMember(d => d.Password, s => s.MapFrom(s => s.Password))
                .ForMember(d => d.EmailAddress, s => s.MapFrom(s => s.Email))
                .ForMember(d => d.PhoneNumber, s => s.MapFrom(s => s.PhoneNumber))
                .ForMember(d => d.Id, i => i.Ignore())
                .ReverseMap();


            ///
            /// Student autoprofile
            ///


            CreateMap<Student, StudentDto>().ReverseMap();
            CreateMap<Student, CreateStudentDto>().ReverseMap();
            CreateMap<CreateStudentDto, User>()
                .ForMember(d => d.Name, s => s.MapFrom(s => s.Name))
                .ForMember(d => d.Surname, s => s.MapFrom(s => s.Surname))
                .ForMember(d => d.UserName, s => s.MapFrom(s => s.Username))
                .ForMember(d => d.FullName, s => s.MapFrom(s => s.Name + " " + s.Surname))
                .ForMember(d => d.Password, s => s.MapFrom(s => s.Password))
                .ForMember(d => d.EmailAddress, s => s.MapFrom(s => s.Email))
                .ForMember(d => d.PhoneNumber, s => s.MapFrom(s => s.PhoneNumber))
                .ForMember(d => d.Id, i => i.Ignore())
                .ReverseMap();

            ///
            /// Tutor autoprofile
            ///


            CreateMap<Tutor, TutorDto>().ReverseMap();
            CreateMap<Tutor, CreateTutorDto>().ReverseMap();
            CreateMap<CreateTutorDto, User>()
                .ForMember(d => d.Name, s => s.MapFrom(s => s.Name))
                .ForMember(d => d.Surname, s => s.MapFrom(s => s.Surname))
                .ForMember(d => d.UserName, s => s.MapFrom(s => s.Username))
                .ForMember(d => d.FullName, s => s.MapFrom(s => s.Name + " " + s.Surname))
                .ForMember(d => d.Password, s => s.MapFrom(s => s.Password))
                .ForMember(d => d.EmailAddress, s => s.MapFrom(s => s.Email))
                .ForMember(d => d.PhoneNumber, s => s.MapFrom(s => s.PhoneNumber))
                .ForMember(d => d.Id, i => i.Ignore())
                .ReverseMap();
        }
    }
}
