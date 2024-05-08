import { createAction } from 'redux-actions';
import { IAdminStateContext, IGradeStat, ISubjectStat } from './context';
import { IApplication, IRequest, IStudent, ISubject, ITutor } from '../../../models/interface';


export enum AdminActionEnum{
    GetSubjectByGrade='SUBJECT_GRADE',
    GetAllRegistrationApplications='REGISTRATION_APPLICATION',
    GetRequests='GET_REQUESTS',
    SearchStudent='SEARCH_STUDENT',
    SearchTutor='SEARCH_TUTOR',
    GetGradeStat='GET_GRADE_STAT',
    GetSubjectStat='GET_SUBJECT_STAT'
}

export const GetSubjectByGrade=createAction<IAdminStateContext,ISubject[]>(AdminActionEnum.GetSubjectByGrade,(gradeSubjects)=>({gradeSubjects}))
export const GetRegistrationApplications=createAction<IAdminStateContext,IApplication[]>(AdminActionEnum.GetAllRegistrationApplications,(registrationApplications)=>({registrationApplications}))
export const GetRequests=createAction<IAdminStateContext,IRequest[]>(AdminActionEnum.GetRequests,(requests)=>({requests}))
export const SearchStudentAction=createAction<IAdminStateContext,IStudent[]>(AdminActionEnum.SearchStudent,(searchStudentState)=>({searchStudentState}))
export const SearchTutorAction=createAction<IAdminStateContext,ITutor[]>(AdminActionEnum.SearchTutor,(searchTutorState)=>({searchTutorState}))
export const GetSubjectStatistics=createAction<IAdminStateContext,ISubjectStat>(AdminActionEnum.GetSubjectStat,(subjectStats)=>({subjectStats}))
export const GetGradeStatistics=createAction<IAdminStateContext,IGradeStat>(AdminActionEnum.GetGradeStat,(gradeStats)=>({gradeStats}))