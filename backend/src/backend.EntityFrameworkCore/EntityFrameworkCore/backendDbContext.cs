using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using backend.Authorization.Roles;
using backend.Authorization.Users;
using backend.MultiTenancy;
using backend.Domain.Model;

namespace backend.EntityFrameworkCore
{
    public class backendDbContext : AbpZeroDbContext<Tenant, Role, User, backendDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public DbSet<Student> Students { get; set; }
        public DbSet<Tutor> Tutors { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Lesson> Lessons { get; set; }
        public DbSet<ClassRoom> ClassRooms { get; set; }
        public DbSet<StudentClassRoom> StudentClassRooms { get; set; }
        public DbSet<Registration> Registrations { get; set; }

        public backendDbContext(DbContextOptions<backendDbContext> options)
            : base(options)
        {
        }
    }
}
