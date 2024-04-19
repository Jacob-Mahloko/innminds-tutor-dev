using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using innminds-api.EntityFrameworkCore;
using innminds-api.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace innminds-api.Web.Tests
{
    [DependsOn(
        typeof(innminds-apiWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class innminds-apiWebTestModule : AbpModule
    {
        public innminds-apiWebTestModule(innminds-apiEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(innminds-apiWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(innminds-apiWebMvcModule).Assembly);
        }
    }
}