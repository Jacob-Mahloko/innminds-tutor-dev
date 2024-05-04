using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Domain.Model
{
    public class Lesson:FullAuditedEntity<Guid>
    {
        public virtual string Topic { get; set; }
        public virtual string NotesUrl { get; set; }
        public virtual string VideoUrl { get; set; }
        public virtual string HomeworkUrl { get; set; }
       
    }
}
