using Abp.Application.Services;
using backend.Services.StudentAppService.Dto;
using backend.Services.TutorAppService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.TutorAppService
{
    public interface ITutorAppService:IApplicationService
    {
        Task<TutorDto> CreateStudentAsync(CreateTutorDto input);
        Task<TutorDto> UpdateStudentAsync(TutorDto input);
        Task<TutorDto> GetStudentAsync(Guid id);
        Task<List<TutorDto>> GetAllStudentAsync();
    }
}
