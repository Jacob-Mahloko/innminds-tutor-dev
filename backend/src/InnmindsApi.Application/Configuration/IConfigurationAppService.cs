using System.Threading.Tasks;
using InnmindsApi.Configuration.Dto;

namespace InnmindsApi.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
