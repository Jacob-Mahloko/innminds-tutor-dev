using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using InnmindsApi.Authorization;

namespace InnmindsApi
{
    [DependsOn(
        typeof(InnmindsApiCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class InnmindsApiApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<InnmindsApiAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(InnmindsApiApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
