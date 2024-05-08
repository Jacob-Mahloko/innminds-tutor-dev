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
        Task<TutorDto> CreateTutorAsync(CreateTutorDto input);
        Task<TutorDto> UpdateTutorAsync(TutorDto input);
        Task<TutorDto> GetTutorAsync(Guid id);
        Task<List<TutorDto>> GetAllTutorAsync(string?searchTerm);
    }
}
