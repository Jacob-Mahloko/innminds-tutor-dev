using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Domain.Model
{
    public class Student :Person
    {
        public string About { get; set; }
        public string Subjects { get; set; }
        public string Grade {  get; set; }
    }
}
