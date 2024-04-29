using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using InnmindsApi.Authorization.Roles;
using InnmindsApi.Authorization.Users;
using InnmindsApi.MultiTenancy;

namespace InnmindsApi.EntityFrameworkCore
{
    public class InnmindsApiDbContext : AbpZeroDbContext<Tenant, Role, User, InnmindsApiDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public InnmindsApiDbContext(DbContextOptions<InnmindsApiDbContext> options)
            : base(options)
        {
        }
    }
}
