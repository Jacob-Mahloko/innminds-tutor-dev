using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.UI;
using backend.Domain.Model;
using backend.Services.ClassRoomAppService.Dto;
using backend.Services.LessonAppService.Dto;
using backend.Services.StudentAppService.Dto;
using backend.Services.SubjectAppService.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace backend.Services.SubjectAppService
{
    /// <summary>
    /// 
    /// </summary>
    public class SubjectAppService : ApplicationService, ISubjectAppService
    {
        private readonly IRepository<Subject, Guid> _repository;
        private readonly IRepository<Tutor, Guid> _tutorRepository;
        private readonly ClassRoomAppService.ClassRoomAppService _classRoomAppService;
        private readonly LessonAppService.LessonAppService _lessonAppService;

        public SubjectAppService(
            IRepository<Subject, Guid> repository,
            IRepository<Tutor, Guid> tutorRepository, 
            ClassRoomAppService.ClassRoomAppService classRoomAppService,
            LessonAppService.LessonAppService lessonAppService
         ) 
        {
            this._repository = repository;
            this._tutorRepository = tutorRepository;
            this._classRoomAppService = classRoomAppService;
            this._lessonAppService = lessonAppService;
        }

        public async Task<SubjectDto> CreateAsync(CreateSubjectDto input)
        {
            var subject = ObjectMapper.Map<Subject>(input);
            var newSubject = await _repository.InsertAsync(subject);

            CurrentUnitOfWork.SaveChanges();

            var classRoomDto = new CreateClassRoomDto { SubjectID = newSubject.Id };
            await _classRoomAppService.CreateAysnc(classRoomDto);
            return ObjectMapper.Map<SubjectDto>(newSubject);
        }

        public async Task<SubjectDto> DeleteSubjectAsync(Guid id)
        {
            var subject = await _repository.FirstOrDefaultAsync(id);

            if (subject == null) {
                throw new UserFriendlyException("Subject doesn't Exist");
            }
            await _repository.DeleteAsync(id);
            return ObjectMapper.Map<SubjectDto>(subject);
        }

        public async Task<SubjectDto> GetSubjectAsync(Guid id)
        {
            var subject = await _repository.FirstOrDefaultAsync(id);

            if (subject == null)
            {
                throw new UserFriendlyException("Subject doesn't Exist");
            }

            return ObjectMapper.Map<SubjectDto>(subject);
        }

        public async Task<SubjectDto> UpdateSubjectAsync(SubjectDto input)
        {
            var subject = ObjectMapper.Map<Subject>(input);
            return ObjectMapper.Map<SubjectDto>(await _repository.UpdateAsync(subject));
        }

        public async Task<List<SubjectDto>> GetAllSubjectAsync()
        {
            return ObjectMapper.Map<List<SubjectDto>>(await _repository.GetAllIncluding(x=>x.Lessons).ToListAsync());
        }
        public async Task<SubjectDto> AddTutorAsync(AddTutorDto input) {

            var subject = await _repository.FirstOrDefaultAsync(input.SubjectID);
            if (subject == null)
            {
                throw new UserFriendlyException("Subject doesn't exist");
            }

            var tutor = await _tutorRepository.FirstOrDefaultAsync(input.TutorID);
            if (tutor == null)
            {
                throw new UserFriendlyException("Tutor doesn't Exist");
            }

            subject.Tutor = tutor;

            await _repository.UpdateAsync(subject);

            return ObjectMapper.Map<SubjectDto>(subject);
        }

        public async Task<List<SubjectDto>> GetSubjectByGrade(string grade) { 
            var subjects= await _repository.GetAllListAsync(x=>x.grade==grade);
            return ObjectMapper.Map<List<SubjectDto>>(subjects);
        }
        public async Task<SubjectDto> AddLesson([FromQuery]string grade, [FromQuery]string name,[FromBody]CreateLessonDto input) {
            var subject =await _repository.FirstOrDefaultAsync(x => x.grade == grade && x.Name == name);
            if (subject == null)
            {
                throw new UserFriendlyException("Subject doesn't exist");
            }

            var lesson =await  _lessonAppService.CreateAsync(input);

            if (subject.Lessons == null) { 
                subject.Lessons = new List<Lesson>();
            }

            subject.Lessons.Add(lesson);
            return ObjectMapper.Map<SubjectDto>(await _repository.UpdateAsync(subject));

        }
        public async Task<List<LessonDto>> GetSubjectLesson(Guid id)
        {
            return ObjectMapper.Map<List<LessonDto>>(await _repository.GetAllIncluding(x => x.Lessons).Select(x => x.Lessons).ToListAsync());
        }
        public async Task<List<SubjectDto>> GetTutorSubjects(Guid id) {
            return ObjectMapper.Map<List<SubjectDto>>(await _repository.GetAllIncluding(x => x.Tutor).Where(x => x.Tutor.Id == id).ToListAsync());
        }
    }
}
