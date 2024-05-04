using Abp.Application.Services;
using Abp.Domain.Repositories;
using backend.Domain.Model;
using backend.Services.LessonAppService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.LessonAppService
{
    public class LessonAppService : ApplicationService, ILessonAppService
    {
        private readonly IRepository<Lesson, Guid> _repository;

        public LessonAppService(IRepository<Lesson,Guid> repository)
        {
            _repository = repository;
        }
        public async Task<Lesson> CreateAsync(CreateLessonDto input)
        {
            var lesson =ObjectMapper.Map<Lesson>(input);
            return await _repository.InsertAsync(lesson); 
        }
    }
}
