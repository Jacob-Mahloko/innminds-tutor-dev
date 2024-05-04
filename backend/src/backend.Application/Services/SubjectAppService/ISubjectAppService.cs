using Abp.Application.Services;
using backend.Services.StudentAppService.Dto;
using backend.Services.SubjectAppService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.SubjectAppService
{
    /// <summary>
    /// 
    /// </summary>
    public interface ISubjectAppService:IApplicationService
    {
        Task<SubjectDto> CreateAsync(CreateSubjectDto input);
        Task<SubjectDto> GetSubjectAsync(Guid id);
        Task<SubjectDto> UpdateSubjectAsync(SubjectDto input);
        Task<SubjectDto> DeleteSubjectAsync(Guid id);
    }
}
