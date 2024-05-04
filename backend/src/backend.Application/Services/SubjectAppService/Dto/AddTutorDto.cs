using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.SubjectAppService.Dto
{
    public class AddTutorDto
    {
        public Guid SubjectID { get; set; }
        public Guid TutorID { get; set; }
    }
}
