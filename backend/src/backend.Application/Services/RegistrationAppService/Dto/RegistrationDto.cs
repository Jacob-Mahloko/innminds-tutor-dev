using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using backend.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.RegistrationAppService.Dto
{
    [AutoMapFrom(typeof(Registration))]
    public class RegistrationDto:EntityDto<Guid>
    {
        public string Type { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Grade { get; set; }
        public virtual string SubjectIds { get; set; }
    }
}
