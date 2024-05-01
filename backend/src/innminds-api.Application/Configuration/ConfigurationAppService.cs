using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using innminds-api.Configuration.Dto;

namespace innminds-api.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : innminds-apiAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
