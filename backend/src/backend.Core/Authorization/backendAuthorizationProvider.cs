using Abp.Authorization;
using Abp.Localization;
using Abp.MultiTenancy;

namespace backend.Authorization
{
    public class backendAuthorizationProvider : AuthorizationProvider
    {
        public override void SetPermissions(IPermissionDefinitionContext context)
        {
            context.CreatePermission(PermissionNames.Pages_Users, L("Users"));
            context.CreatePermission(PermissionNames.Pages_Users_Activation, L("UsersActivation"));
            context.CreatePermission(PermissionNames.Pages_Roles, L("Roles"));
            context.CreatePermission(PermissionNames.Pages_Admin, L("Admin"));
            context.CreatePermission(PermissionNames.Pages_Create_User, L("CreateUser"));
            context.CreatePermission(PermissionNames.Pages_Tenants, L("Tenants"), multiTenancySides: MultiTenancySides.Host);
            context.CreatePermission(PermissionNames.Pages_ITutor, L("ITutor"));
            context.CreatePermission(PermissionNames.Pages_IStudent, L("IStudent"));
            context.CreatePermission(PermissionNames.Pages_IAdmin, L("Admin"));
        }

        private static ILocalizableString L(string name)
        {
            return new LocalizableString(name, backendConsts.LocalizationSourceName);
        }
    }
}
