using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Domain.Model
{
    public class ClassRoom:FullAuditedEntity<Guid>
    {
        public virtual Subject Subject { get; set; }
    }
}
