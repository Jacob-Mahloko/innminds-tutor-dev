using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Domain.Model
{
    public class Request:FullAuditedEntity<Guid>
    {
        public string Reason { get; set; }
        public string Info { get; set; }
        public string Username { get; set; }
        public string? Status { get; set; }
    }
}
