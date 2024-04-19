using System.Threading.Tasks;
using Abp.Application.Services;
using innminds-api.Authorization.Accounts.Dto;

namespace innminds-api.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
