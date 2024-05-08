using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Domain.Model
{
    public class Subject:FullAuditedEntity<Guid>
    {
        public virtual string Name { get; set; }
        public virtual string grade { get; set; }
        public virtual Tutor ? Tutor { get; set; }
        public virtual ICollection<Lesson> ? Lessons { get; set; }

    }
}
