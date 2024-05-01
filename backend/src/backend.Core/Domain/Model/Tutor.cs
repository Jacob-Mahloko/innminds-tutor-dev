using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Domain.Model
{
    public class Tutor:Person
    {
        public string Subjects { get; set; }
        public string Grades { get; set; }
    }
}
