using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using backend.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.ClassRoomAppService.Dto
{
    [AutoMapFrom(typeof(ClassRoom))]
    public class CreateClassRoom:EntityDto<Guid>
    {
    }
}
