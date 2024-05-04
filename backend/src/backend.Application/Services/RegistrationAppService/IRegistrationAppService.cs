using Abp.Application.Services;
using backend.Services.RegistrationAppService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.RegistrationAppService
{
    public interface IRegistrationAppService:IApplicationService
    {
        Task<RegistrationDto> CreateAsync(RegistrationDto input);
        Task<RegistrationDto> GetAsync(Guid id);
        Task<List<RegistrationDto>> GetAllRegistrationAsync();
        Task<RegistrationDto> Delete(Guid id);
    }
}
