using Abp.Authorization;
using innminds-api.Authorization.Roles;
using innminds-api.Authorization.Users;

namespace innminds-api.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
