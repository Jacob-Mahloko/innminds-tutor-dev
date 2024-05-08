using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using backend.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.RequestAppService.Dto
{
    [AutoMapFrom(typeof(Request))]
    public class CreateRequestDto:EntityDto<Guid>
    {
        public string Reason { get; set; }
        public string Info { get; set; }
        public string? Status { get; set; }
    }
}
