using Abp.Application.Services;
using innminds-api.MultiTenancy.Dto;

namespace innminds-api.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

