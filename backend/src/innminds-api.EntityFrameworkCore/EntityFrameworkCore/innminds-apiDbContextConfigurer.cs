using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace innminds-api.EntityFrameworkCore
{
    public static class innminds-apiDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<innminds-apiDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<innminds-apiDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
