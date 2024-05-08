using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.EntityFrameworkCore.Uow;
using backend.Domain.Model;
using backend.Services.LessonAppService.Dto;
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
        public async Task<NoStudents> GetNumberofStudentInGrades()
        {

            var grade10 = await _repository.GetAllIncluding(x => x.Student, x => x.ClassRoom.Subject.Lessons).Where(x => x.Student.Grade == "10").CountAsync();
            var grade11 = await _repository.GetAllIncluding(x => x.Student, x => x.ClassRoom.Subject.Lessons).Where(x => x.Student.Grade == "11").CountAsync();
            var grade12 = await _repository.GetAllIncluding(x => x.Student, x => x.ClassRoom.Subject.Lessons).Where(x => x.Student.Grade == "12").CountAsync();

            return new NoStudents { grade10=grade10,grade11=grade11,grade12=grade12 };

        }
        public async Task<SubjectStats> GetNumberofStudentInGradesSubject()
        {

            var grade10PS = await _repository.GetAllIncluding(x => x.Student, x => x.ClassRoom.Subject.Lessons).Where(x => x.Student.Grade == "10" && x.ClassRoom.Subject.Name == "Physical Science").CountAsync();
            var grade10M = await _repository.GetAllIncluding(x => x.Student, x => x.ClassRoom.Subject.Lessons).Where(x => x.Student.Grade == "10" && x.ClassRoom.Subject.Name == "Mathematics").CountAsync();
            var grade10LS = await _repository.GetAllIncluding(x => x.Student, x => x.ClassRoom.Subject.Lessons).Where(x => x.Student.Grade == "10" && x.ClassRoom.Subject.Name == "Life Science").CountAsync();

            var grade11PS = await _repository.GetAllIncluding(x => x.Student, x => x.ClassRoom.Subject.Lessons).Where(x => x.Student.Grade == "11" && x.ClassRoom.Subject.Name == "Physical Science").CountAsync();
            var grade11M = await _repository.GetAllIncluding(x => x.Student, x => x.ClassRoom.Subject.Lessons).Where(x => x.Student.Grade == "11" && x.ClassRoom.Subject.Name == "Mathematics").CountAsync();
            var grade11LS = await _repository.GetAllIncluding(x => x.Student, x => x.ClassRoom.Subject.Lessons).Where(x => x.Student.Grade == "11" && x.ClassRoom.Subject.Name == "Life Science").CountAsync();

            var grade12PS = await _repository.GetAllIncluding(x => x.Student, x => x.ClassRoom.Subject.Lessons).Where(x => x.Student.Grade == "12" && x.ClassRoom.Subject.Name == "Physical Science").CountAsync();
            var grade12M = await _repository.GetAllIncluding(x => x.Student, x => x.ClassRoom.Subject.Lessons).Where(x => x.Student.Grade == "12" && x.ClassRoom.Subject.Name == "Mathematics").CountAsync();
            var grade12LS = await _repository.GetAllIncluding(x => x.Student, x => x.ClassRoom.Subject.Lessons).Where(x => x.Student.Grade == "12" && x.ClassRoom.Subject.Name == "Life Science").CountAsync();

            return new SubjectStats
            {
                grade10PS = grade10PS,
                grade10M = grade10M,
                grade10LS = grade10LS,
                grade11PS = grade11PS,
                grade11M = grade11M,
                grade11LS = grade11LS,
                grade12PS = grade12PS,
                grade12M = grade12M,
                grade12LS = grade12LS
            };
        }
        public async Task<List<SubjectDto>> GetStudentSubjects() {

            var subject = await _repository.GetAllIncluding(x => x.Student, x => x.ClassRoom.Subject.Lessons).Where(x => x.Student.User.Id == AbpSession.UserId).Select(x => x.ClassRoom.Subject).ToListAsync();
            if (subject == null)
            {
                return null;
            }

            return ObjectMapper.Map<List<SubjectDto>>(subject);

        }
        public async Task<List<LessonDto>> GetStudentLesson()
        {

            var subject = await _repository.GetAllIncluding(x => x.Student, x => x.ClassRoom.Subject.Lessons).Where(x => x.Student.User.Id == AbpSession.UserId).Select(x => x.ClassRoom.Subject.Lessons).ToListAsync();
            
            if (subject == null)
            {
                return null;
            }

            return ObjectMapper.Map<List<LessonDto>>(subject[2]);

        }
    }
}
