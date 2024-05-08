using Abp.Domain.Entities.Auditing;
using backend.Authorization.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Domain.Model
{
    public abstract class Person: FullAuditedEntity<Guid>
    {
        public string Name {  get; set; }
        public string Surname { get; set; }
        public string IdentityNo { get; set; }
        public string PhoneNumber { get; set; }
        public string Username    {get;set;}
        public string Password    {get;set;}
        public string Email       {get;set;}
        public string ProfileImage {get;set;}
        public StoredFile? Image { get;set;}
        public User? User { get;set;}

    }
}
