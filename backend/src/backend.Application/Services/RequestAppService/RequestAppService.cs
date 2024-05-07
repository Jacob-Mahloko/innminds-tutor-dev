using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.UI;
using backend.Authorization.Users;
using backend.Domain.Model;
using backend.Services.RequestAppService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.RequestAppService
{
    public class RequestAppService : ApplicationService, IRequestAppService
    {
        private readonly IRepository<Request, Guid> _repository;
        private readonly UserManager _userManager;

        public RequestAppService(IRepository<Request,Guid> repository,UserManager userManager)
        {
            _repository = repository;
            _userManager = userManager;
        }
        public async Task<RequestDto> CreateAsync(CreateRequestDto input)
        {
            var request = ObjectMapper.Map<Request>(input);
            request.Username = _userManager.GetUserById((long)AbpSession.UserId).UserName;
            return ObjectMapper.Map<RequestDto>(await _repository.InsertAsync(request));    
        }

        public async Task<RequestDto> DeleteAsync(Guid id)
        {
            var request = await _repository.FirstOrDefaultAsync(x => x.Id == id);

            if (request==null) {
                throw new UserFriendlyException("Request Doesn't exist");
            }
            await _repository.DeleteAsync(request);
            return ObjectMapper.Map<RequestDto>(request);
        }

        public async Task<RequestDto> GetRquestAsync(Guid id)
        {
            var request = await _repository.FirstOrDefaultAsync(x => x.Id == id);

            if (request == null)
            {
                throw new UserFriendlyException("Request Doesn't exist");
            }
           
            return ObjectMapper.Map<RequestDto>(request);
        }

        public async  Task<RequestDto> UpdateAsync(RequestDto input)
        {
            var request = ObjectMapper.Map<Request>(input);

            return ObjectMapper.Map<RequestDto>(await _repository.UpdateAsync(request));
        }

        public async Task<List<RequestDto>> GetAllAsync()
        {
            return ObjectMapper.Map<List<RequestDto>>(await _repository.GetAllListAsync());
        }
    }
}
