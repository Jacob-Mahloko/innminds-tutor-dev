using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using InnmindsApi.Authorization.Roles;
using InnmindsApi.Authorization.Users;
using InnmindsApi.MultiTenancy;
using InnmindsApi.Domain.Model;

namespace InnmindsApi.EntityFrameworkCore
{
    public class InnmindsApiDbContext : AbpZeroDbContext<Tenant, Role, User, InnmindsApiDbContext>
    {
        /* Define a DbSet for each entity of the application */
        DbSet<Student> Students{ get; set; }
        DbSet<Tutor> Tutors { get; set; }
        
        public InnmindsApiDbContext(DbContextOptions<InnmindsApiDbContext> options)
            : base(options)
        {
        }
    }
}
