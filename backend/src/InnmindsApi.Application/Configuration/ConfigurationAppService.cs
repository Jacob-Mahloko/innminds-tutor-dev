using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using InnmindsApi.Configuration.Dto;

namespace InnmindsApi.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : InnmindsApiAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
