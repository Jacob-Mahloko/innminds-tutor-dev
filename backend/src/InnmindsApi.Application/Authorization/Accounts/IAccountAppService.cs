using System.Threading.Tasks;
using Abp.Application.Services;
using InnmindsApi.Authorization.Accounts.Dto;

namespace InnmindsApi.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
