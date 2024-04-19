using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using innminds-api.Authorization.Roles;
using innminds-api.Authorization.Users;
using innminds-api.MultiTenancy;

namespace innminds-api.EntityFrameworkCore
{
    public class innminds-apiDbContext : AbpZeroDbContext<Tenant, Role, User, innminds-apiDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public innminds-apiDbContext(DbContextOptions<innminds-apiDbContext> options)
            : base(options)
        {
        }
    }
}
