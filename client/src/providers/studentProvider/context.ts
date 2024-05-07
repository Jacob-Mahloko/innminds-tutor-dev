import { createContext } from 'react';
import { ILesson, IQuery, IRequest, IStudent, ISubject } from '../../../models/interface';


export const INITIAL_STATE: IStudentStateContext={}

export interface IStudentStateContext {
   subjects?:ISubject[];
   profile?:IStudent;
   lessons?:ILesson[];
  
}

export interface IStudentActionContext{
    getSubjects?:()=>void;
    getStudentProfile?:()=>void;
    sendStudentRequest?:(payload:IRequest)=>void;
    getLessons?:()=>void;
    editProfile?:(payload:IStudent)=>void;
}

const StudentStateContext = createContext<IStudentStateContext>(INITIAL_STATE);

const StudentActionContext = createContext<IStudentActionContext>({});

export {StudentStateContext, StudentActionContext};