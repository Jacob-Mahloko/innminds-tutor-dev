using Abp.Application.Services;
using backend.Domain.Model;
using backend.Services.LessonAppService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.LessonAppService
{
    public interface ILessonAppService:IApplicationService
    {
        Task<Lesson> CreateAsync(CreateLessonDto input); 
    }
}
