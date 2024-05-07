
using AutoMapper;
using backend.Authorization.Users;
using backend.Domain.Model;
using backend.Services.AdminAppService.Dto;
using backend.Services.ClassRoomAppService.Dto;
using backend.Services.LessonAppService.Dto;
using backend.Services.RegistrationAppService.Dto;
using backend.Services.RequestAppService.Dto;
using backend.Services.StudentAppService.Dto;
using backend.Services.SubjectAppService.Dto;
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

            ///
            /// Subject Mappings
            ///


            CreateMap<CreateSubjectDto, Subject>()
                .ForMember(d => d.Name, c => c.MapFrom(c => c.Name))
                .ForMember(d => d.grade, c => c.MapFrom(c => c.grade)).ReverseMap();


            ///
            /// Lesson room Mapping
            ///

            CreateMap<CreateLessonDto, Lesson>()
                .ForMember(x => x.Topic,c=>c.MapFrom(c=>c.Topic))
                .ForMember(x=>x.HomeworkUrl,c=>c.MapFrom(c=>c.HomeworkUrl))
                .ForMember(x=>x.VideoUrl,c=>c.MapFrom(c=>c.VideoUrl))
                .ForMember(x=>x.NotesUrl,c=>c.MapFrom(c=>c.NotesUrl)).ReverseMap();

            //
            // Registration Mapping
            //

            CreateMap<RegistrationDto,Registration>().ReverseMap();

            //
            // Request Mapping
            //
            CreateMap<Request, CreateRequestDto>().ReverseMap();
            CreateMap<Request, RequestDto>().ReverseMap();
        }
    }
}
