using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using backend.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.SubjectAppService.Dto
{
    [AutoMapFrom(typeof(Subject))]
    public class SubjectDto:EntityDto<Guid>
    {
        public virtual string Name { get; set; }
        public virtual string grade { get; set; }
        public virtual Tutor? Tutor { get; set; }
        public virtual ICollection<Lesson>? Lessons { get; set; }
    }
}
