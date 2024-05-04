using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using backend.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.LessonAppService.Dto
{
    [AutoMapFrom(typeof(Lesson))]
    public class LessonDto: EntityDto<Guid>
    {
        public virtual string Topic { get; set; }
        public virtual string NotesUrl { get; set; }
        public virtual string VideoUrl { get; set; }
        public virtual string HomeworkUrl { get; set; }
        
    }
}
