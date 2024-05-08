using System.Threading.Tasks;
using Abp.Application.Services;
using InnmindsApi.Sessions.Dto;

namespace InnmindsApi.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
