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
    public class StudentClassRoomDto:EntityDto<Guid>
    {
        public Student Student { get; set; }
        public ClassRoom ClassRoom { get; set; }
    }
}
