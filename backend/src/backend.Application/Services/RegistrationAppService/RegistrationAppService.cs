using Abp.Application.Services;
using backend.Services.RegistrationAppService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using backend.Domain.Model;
using Abp.UI;

namespace backend.Services.RegistrationAppService
{
    public class RegistrationAppService : ApplicationService, IRegistrationAppService
    {
        private readonly IRepository<Registration,Guid> _repository;

        public RegistrationAppService(IRepository<Registration, Guid> repository)
        {
            _repository = repository;
        }


        public async Task<RegistrationDto> CreateAsync(RegistrationDto input)
        {
            var reg = ObjectMapper.Map<Registration>(input);
            
            return ObjectMapper.Map<RegistrationDto>(await _repository.InsertAsync(reg));
            
        }

        public async Task<RegistrationDto> Delete( Guid id)
        {
            var reg = await _repository.FirstOrDefaultAsync(id);
            if (reg == null) {
                throw new UserFriendlyException("Registeration doesn't exist");
            }

            _repository.Delete(reg);
            return ObjectMapper.Map<RegistrationDto>(reg);
        }

        public async Task<List<RegistrationDto>> GetAllRegistrationAsync()
        { 
            return ObjectMapper.Map<List<RegistrationDto>>( await _repository.GetAllListAsync());
        }

        public async Task<RegistrationDto> GetAsync(Guid id)
        {
            var reg = await _repository.FirstOrDefaultAsync(id);
            if (reg == null)
            {
                throw new UserFriendlyException("Registeration doesn't exist");
            }
          
            return ObjectMapper.Map<RegistrationDto>(reg);
        }
    }
}
