using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using backend.Authorization.Users;
using backend.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.TutorAppService.Dto
{
    [AutoMapFrom(typeof(Tutor))]
    public class TutorDto:EntityDto<Guid>
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string IdentityNo { get; set; }
        public string PhoneNumber { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string ProfileImage { get; set; }
        public string Subjects { get; set; }
        public string Grades { get; set; }
    }
}
