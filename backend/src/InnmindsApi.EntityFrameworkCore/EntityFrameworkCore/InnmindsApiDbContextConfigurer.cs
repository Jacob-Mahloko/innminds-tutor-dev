using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace InnmindsApi.EntityFrameworkCore
{
    public static class InnmindsApiDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<InnmindsApiDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<InnmindsApiDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
