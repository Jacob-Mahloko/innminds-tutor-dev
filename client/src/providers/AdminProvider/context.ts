import { createContext } from 'react';
import { IApplication, IQuery, IRequest, IStudent, ISubject, ITutor } from '../../../models/interface';


export interface IGradeStat{
    grade10:number;
    grade11:number;
    grade12:number;
}

export interface ISubjectStat{
    grade10LS:number;
    grade11LS:number;
    grade12LS:number;
    grade10M:number;
    grade11M:number;
    grade12M:number;
    grade10PS:number;
    grade11PS:number;
    grade12PS:number;
}
export const INITIAL_STATE: IAdminStateContext={}

export interface IAdminStateContext {
   gradeSubjects?:ISubject[];
   registrationApplications?:IApplication[];
   requests?:IRequest[];
   searchStudentState?:IStudent[];
   searchTutorState?:ITutor[];
   gradeStats?:IGradeStat;
   subjectStats?:ISubjectStat;
}

export interface IAdminActionContext{
    getSubjectByGrade?:(grade:string)=>void;
    sendApplication?:(payload:IApplication)=>void;
    getAllRegistration?:()=>void;
    registerStudent?:(payload:IStudent)=>void;
    registerTutor?:(payload:IStudent)=>void;
    getRequests?:()=>void;
    searchStudent?:(payload:IQuery)=>void;
    searchTutor?:(payload:IQuery)=>void;
    getGradeStat?:()=>void;
    getSubjectStat?:()=>void;

}

const AdminStateContext = createContext<IAdminStateContext>(INITIAL_STATE);

const AdminActionContext = createContext<IAdminActionContext>({});

export {AdminStateContext, AdminActionContext};