using Abp.Application.Services.Dto;
using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Domain.Model
{
    public class Registration :FullAuditedEntity<Guid>
    {
        public string Type { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Grade { get; set; }
        public virtual string SubjectIds { get; set; }
        public virtual string Status { get; set; }

    }
}
