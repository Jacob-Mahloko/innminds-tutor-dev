using System.Threading.Tasks;
using innminds-api.Configuration.Dto;

namespace innminds-api.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
