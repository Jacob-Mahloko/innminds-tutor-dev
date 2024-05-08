using Abp.Application.Services;
using backend.Services.RequestAppService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.RequestAppService
{
    public interface IRequestAppService:IApplicationService
    {
        Task<RequestDto> CreateAsync(CreateRequestDto input);
        Task<RequestDto> GetRquestAsync(Guid id);
        Task<RequestDto> UpdateAsync(RequestDto input);
        Task<RequestDto> DeleteAsync (Guid id);
    }
}
