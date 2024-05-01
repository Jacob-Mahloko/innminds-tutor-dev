using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using innminds-api.Authorization;

namespace innminds-api
{
    [DependsOn(
        typeof(innminds-apiCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class innminds-apiApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<innminds-apiAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(innminds-apiApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
