using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace InnmindsApi.Controllers
{
    public abstract class InnmindsApiControllerBase: AbpController
    {
        protected InnmindsApiControllerBase()
        {
            LocalizationSourceName = InnmindsApiConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
