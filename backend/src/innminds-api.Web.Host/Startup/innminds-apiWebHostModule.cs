using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using innminds-api.Configuration;

namespace innminds-api.Web.Host.Startup
{
    [DependsOn(
       typeof(innminds-apiWebCoreModule))]
    public class innminds-apiWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public innminds-apiWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(innminds-apiWebHostModule).GetAssembly());
        }
    }
}
