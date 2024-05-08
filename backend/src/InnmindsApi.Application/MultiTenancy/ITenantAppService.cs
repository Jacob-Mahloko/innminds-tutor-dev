using Abp.Application.Services;
using InnmindsApi.MultiTenancy.Dto;

namespace InnmindsApi.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

