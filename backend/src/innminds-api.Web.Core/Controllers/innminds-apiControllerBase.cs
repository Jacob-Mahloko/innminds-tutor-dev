using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace innminds-api.Controllers
{
    public abstract class innminds-apiControllerBase: AbpController
    {
        protected innminds-apiControllerBase()
        {
            LocalizationSourceName = innminds-apiConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
