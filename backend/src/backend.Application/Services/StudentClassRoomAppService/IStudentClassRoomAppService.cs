using Abp.Application.Services;
using backend.Services.StudentClassRoomAppService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.StudentClassRoomAppService
{
    public interface IStudentClassRoomAppService:IApplicationService
    {
        Task<StudentClassRoomDto> CreateAsync(CreateStudentClassRoomDto input);
        Task<List<StudentClassRoomDto>> GetAsync(Guid id);
        Task<StudentClassRoomDto> UpdateAsync(StudentClassRoomDto input);
        Task<StudentClassRoomDto> DeleteAsync(Guid id);
        Task<List<StudentClassRoomDto>> GetAllAsync();
    }
}
