using System.Threading.Tasks;
using Abp.Application.Services;
using innminds-api.Sessions.Dto;

namespace innminds-api.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
