using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using backend.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.StudentClassRoomAppService.Dto
{
    [AutoMapFrom(typeof(StudentClassRoom))]
    public class CreateStudentClassRoomDto:EntityDto<Guid>
    {
        public  Guid StudentId { get; set; }
        public  Guid ClassRoomId { get; set; }
    }
}
