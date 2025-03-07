﻿using System.Threading.Tasks;
using Abp.Application.Services;
using backend.Sessions.Dto;

namespace backend.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
