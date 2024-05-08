using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.UI;
using AutoMapper.Internal.Mappers;
using backend.Domain.Model;
using backend.Services.ClassRoomAppService.Dto;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.ClassRoomAppService
{
    public class ClassRoomAppService : ApplicationService, IClassRoomAppService
    {
        private readonly IRepository<ClassRoom, Guid> _repository;
        private readonly IRepository<Subject, Guid> _subjectRepository;

        public ClassRoomAppService(IRepository<ClassRoom,Guid> repository,IRepository<Subject,Guid> subjectRepository) {
            _repository = repository;
            _subjectRepository = subjectRepository;
        }

        public async Task<ClassRoomDto> CreateAysnc(CreateClassRoomDto input)
        {
            var classRoom = new ClassRoom();

            classRoom.Subject = await _subjectRepository.FirstOrDefaultAsync(input.SubjectID);


            if (classRoom == null) {
                throw new UserFriendlyException("The Subject doesn't exist");
            }
            return ObjectMapper.Map<ClassRoomDto>(await _repository.InsertAsync(classRoom));
        }

        public async Task<ClassRoomDto> Delete(Guid id)
        {
            var classRoom = await _repository.FirstOrDefaultAsync(id);
            if (classRoom == null)
            {
                throw new UserFriendlyException("Classroom doesn't exist");
            }

            await _repository.DeleteAsync(id);
            return ObjectMapper.Map<ClassRoomDto>(classRoom);
        }

        public async Task<List<ClassRoomDto>> GetAllAsync()
        {
            return ObjectMapper.Map<List<ClassRoomDto>>(await _repository.GetAllIncluding(x=>x.Subject).ToListAsync());
        }

        public async Task<ClassRoomDto> GetAsync(Guid id)
        {
            var classRoom = await _repository.FirstOrDefaultAsync(id);
            if (classRoom == null)
            {
                throw new UserFriendlyException("Classroom doesn't exist");
            }

            return ObjectMapper.Map<ClassRoomDto>(classRoom);
        }

        public async Task<ClassRoomDto> UpdateAsync(ClassRoomDto input)
        {
            var classRoom = ObjectMapper.Map<ClassRoom>(input);
            return ObjectMapper.Map<ClassRoomDto>(await _repository.UpdateAsync(classRoom));
        }

    }
}
