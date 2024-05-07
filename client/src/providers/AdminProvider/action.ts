import { createAction } from 'redux-actions';
import { IAdminStateContext } from './context';
import { IApplication, IRequest, IStudent, ISubject, ITutor } from '../../../models/interface';


export enum AdminActionEnum{
    GetSubjectByGrade='SUBJECT_GRADE',
    GetAllRegistrationApplications='REGISTRATION_APPLICATION',
    GetRequests='GET_REQUESTS',
    SearchStudent='SEARCH_STUDENT',
    SearchTutor='SEARC_TUTOR'
}

export const GetSubjectByGrade=createAction<IAdminStateContext,ISubject[]>(AdminActionEnum.GetSubjectByGrade,(gradeSubjects)=>({gradeSubjects}))
export const GetRegistrationApplications=createAction<IAdminStateContext,IApplication[]>(AdminActionEnum.GetAllRegistrationApplications,(registrationApplications)=>({registrationApplications}))
export const GetRequests=createAction<IAdminStateContext,IRequest[]>(AdminActionEnum.GetRequests,(requests)=>({requests}))
export const SearchStudentAction=createAction<IAdminStateContext,IStudent[]>(AdminActionEnum.SearchStudent,(searchStudentState)=>({searchStudentState}))
export const SearchTutorAction=createAction<IAdminStateContext,ITutor[]>(AdminActionEnum.SearchTutor,(searchTutorState)=>({searchTutorState}))