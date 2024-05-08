using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InnmindsApi.Domain.Model { 

    public class Student:Person
    {
        public string about {  get; set; }
        public string [] subjects {  get; set; }
        public int grade { get; set; }

    }
}
