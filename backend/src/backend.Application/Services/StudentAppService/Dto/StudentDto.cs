using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using backend.Domain.Model;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.StudentAppService.Dto
{
    [AutoMapFrom(typeof(Student))]
    public class StudentDto : EntityDto<Guid>
    {
        /// <summary>
        /// 
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string ?Surname { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string ?PhoneNumber { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Username { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string ?Email { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string ?ProfileImage { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string ?About { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string ?Subjects { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string? Grade { get; set; }

        public Guid? ImageId { get; set; }
        public string ?ImageString {get;set;}

        [NotMapped]
        public IFormFile? File { get; set; }
    }
}
