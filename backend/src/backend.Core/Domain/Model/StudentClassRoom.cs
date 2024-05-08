using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Domain.Model
{
    public class StudentClassRoom:FullAuditedEntity<Guid>
    {
        public virtual Student Student { get; set; }
        public virtual ClassRoom ClassRoom { get; set; }
    }
}
