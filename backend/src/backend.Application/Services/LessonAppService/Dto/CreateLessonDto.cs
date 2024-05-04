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
    public class CreateLessonDto: EntityDto<Guid>
    {
        public string Topic { get; set; }
        public string NotesUrl { get; set; }
        public string VideoUrl { get; set; }
        public string HomeworkUrl { get; set; }
        
    }
}
