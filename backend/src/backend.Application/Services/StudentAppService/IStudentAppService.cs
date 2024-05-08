using Abp.Application.Services;
using backend.Services.AdminAppService.Dto;
using backend.Services.StudentAppService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.StudentAppService
{
    public interface IStudentAppService:IApplicationService
    {
        Task<StudentDto> CreateStudentAsync(CreateStudentDto input);
        Task<StudentDto> UpdateStudentAsync(StudentDto input);
        Task<StudentDto> GetStudentAsync(Guid id);
        Task<List<StudentDto>> GetAllStudentAsync(string?searchTerm);
    }
}
