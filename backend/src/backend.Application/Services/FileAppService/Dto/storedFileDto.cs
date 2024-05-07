using Abp.Application.Services.Dto;
using Abp.Domain.Entities;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.FileAppService.Dto
{
    public class storedFileDto:EntityDto<Guid>
    {
        [Required]
        public IFormFile? FileData { get; set; }
    }
}
