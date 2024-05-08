using Abp.Application.Services;
using backend.Services.AdminAppService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.AdminAppService
{
    public interface IAdminAppService:IApplicationService
    {
       Task<AdminDto> CreateAdminAsync(CreateAdminDto input);
       Task<AdminDto> UpdateAdminAsync(AdminDto input);
       Task<AdminDto> GetAdminAsync(Guid id);
       Task<List<AdminDto>> GetAllAdminAsync();
    }
}
