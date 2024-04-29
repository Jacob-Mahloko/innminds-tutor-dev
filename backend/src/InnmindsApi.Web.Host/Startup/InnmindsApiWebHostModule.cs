using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using InnmindsApi.Configuration;

namespace InnmindsApi.Web.Host.Startup
{
    [DependsOn(
       typeof(InnmindsApiWebCoreModule))]
    public class InnmindsApiWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public InnmindsApiWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(InnmindsApiWebHostModule).GetAssembly());
        }
    }
}
