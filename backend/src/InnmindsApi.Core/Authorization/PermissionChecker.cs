using Abp.Authorization;
using InnmindsApi.Authorization.Roles;
using InnmindsApi.Authorization.Users;

namespace InnmindsApi.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
