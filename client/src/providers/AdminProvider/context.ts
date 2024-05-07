import { createContext } from 'react';
import { IApplication, IQuery, IRequest, IStudent, ISubject, ITutor } from '../../../models/interface';


export const INITIAL_STATE: IAdminStateContext={}

export interface IAdminStateContext {
   gradeSubjects?:ISubject[];
   registrationApplications?:IApplication[];
   requests?:IRequest[];
   searchStudentState?:IStudent[];
   searchTutorState?:ITutor[];
}

export interface IAdminActionContext{
    getSubjectByGrade?:(grade:string)=>void;
    sendApplication?:(payload:IApplication)=>void;
    getAllRegistration?:()=>void;
    registerStudent?:(payload:IStudent)=>void;
    registerTutor?:()=>void;
    getRequests?:()=>void;
    searchStudent?:(payload:IQuery)=>void;
    searchTutor?:(payload:IQuery)=>void;
}

const AdminStateContext = createContext<IAdminStateContext>(INITIAL_STATE);

const AdminActionContext = createContext<IAdminActionContext>({});

export {AdminStateContext, AdminActionContext};