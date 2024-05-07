using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using MemoryLinkBackend.Authorization.Roles;
using MemoryLinkBackend.Authorization.Users;
using MemoryLinkBackend.MultiTenancy;
using backend.Domain.Model;

namespace MemoryLinkBackend.EntityFrameworkCore
{
    public class MemoryLinkBackendDbContext : AbpZeroDbContext<Tenant, Role, User, MemoryLinkBackendDbContext>
    {
        /* Define a DbSet for each entity of the application */
        DbSet<Student> Students { get; set; }
        DbSet<Tutor> Tutors { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public MemoryLinkBackendDbContext(DbContextOptions<MemoryLinkBackendDbContext> options)
            : base(options)
        {
        }
    }
}
