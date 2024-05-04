using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.EntityFrameworkCore.Uow;
using backend.Domain.Model;
using backend.Services.StudentClassRoomAppService.Dto;
using backend.Services.SubjectAppService.Dto;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.StudentClassRoomAppService
{
    public class StudentClassRoomAppService : ApplicationService, IStudentClassRoomAppService
    {
        private readonly IRepository<StudentClassRoom, Guid> _repository;
        private readonly IRepository<Student, Guid> _studentRepository;
        private readonly IRepository<ClassRoom, Guid> _classRoomRepository;

        public StudentClassRoomAppService(IRepository<StudentClassRoom,Guid> repository,IRepository<Student,Guid> studentRepository,IRepository<ClassRoom,Guid> classRoomRepository)
        {
            _repository = repository;
            _studentRepository = studentRepository;
            _classRoomRepository = classRoomRepository;
        }
        public async Task<StudentClassRoomDto> CreateAsync(CreateStudentClassRoomDto input)
        {
            var classRoom = new StudentClassRoom() {
                Student = await _studentRepository.FirstOrDefaultAsync(input.StudentId),
                ClassRoom= await _classRoomRepository.FirstOrDefaultAsync(input.ClassRoomId),
            };

            return ObjectMapper.Map<StudentClassRoomDto>(await _repository.InsertAsync(classRoom));
        }

        public async Task<StudentClassRoomDto> DeleteAsync(Guid id)
        {
           var classRoom=await _repository.FirstOrDefaultAsync(id);
            if (classRoom == null)
            {
                return null;
            }
            await _repository.DeleteAsync(id);
            return ObjectMapper.Map<StudentClassRoomDto>(classRoom);
        }

        public async Task<List<StudentClassRoomDto>> GetAllAsync()
        {
            return ObjectMapper.Map<List<StudentClassRoomDto>>(await _repository.GetAllIncluding(x=>x.Student,x=>x.ClassRoom).ToListAsync());
        }

        public async Task<List<StudentClassRoomDto>> GetAsync(Guid id)
        {
            var classRoom = await _repository.GetAllListAsync(x=>x.ClassRoom.Id==id);
            if (classRoom == null)
            {
                return null;
            }

            return ObjectMapper.Map<List<StudentClassRoomDto>>(classRoom);
        }

        public async Task<StudentClassRoomDto> UpdateAsync(StudentClassRoomDto input)
        {
            return ObjectMapper.Map<StudentClassRoomDto>(await _repository.UpdateAsync(ObjectMapper.Map<StudentClassRoom>(input)));
        }

        public async Task<List<SubjectDto>> GetStudentSubjects(Guid id) {

            var subject = await _repository.GetAllIncluding(x => x.Student, x => x.ClassRoom).Where(x => x.Student.Id == id).Select(x => x.ClassRoom.Subject).ToListAsync();
            if (subject == null)
            {
                return null;
            }

            return ObjectMapper.Map<List<SubjectDto>>(subject);

        }
    }
}
