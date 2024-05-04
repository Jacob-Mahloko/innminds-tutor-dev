using Abp.Domain.Entities.Auditing;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Domain.Model
{
    public class StoredFile:FullAuditedEntity<Guid>
    {
        [NotMapped]
        public IFormFile? FileData { get; set; }
        public string Filename { get; set; }
        public string FileExtention { get; set; }
        public long? FileLength { get; set; }
        public string? FilePath { get; set; }
    }
}
