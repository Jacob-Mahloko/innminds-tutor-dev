using Abp.Application.Services;
using backend.Services.ClassRoomAppService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.ClassRoomAppService
{
    public interface IClassRoomAppService:IApplicationService
    {
        Task<ClassRoomDto> CreateAysnc(CreateClassRoomDto input);
        Task<ClassRoomDto> UpdateAsync(ClassRoomDto input);
        Task<ClassRoomDto> GetAsync(Guid id);
        Task<ClassRoomDto> Delete(Guid id);
        Task<List<ClassRoomDto>> GetAllAsync();

    }
}
