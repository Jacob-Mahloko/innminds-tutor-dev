using Abp.Domain.Entities.Auditing;
using InnmindsApi.Authorization.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InnmindsApi.Domain.Model
{
    public abstract class Person : FullAuditedEntity<Guid>
    {
        public string name { get; set; }
        public string surname { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public int IdentityNo { get; set; }
        public string email { get; set; }
        public string phoneNumber { get; set; }

        public User User { get; set; }

    }
}
