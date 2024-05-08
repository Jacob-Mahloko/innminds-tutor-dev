import { createContext } from 'react';
import { ILesson, ISubject } from '../../../models/interface';


export const INITIAL_STATE: ITutorStateContext={}

export interface ITutorStateContext {
   allSubjects?:ISubject[]
}

export interface ITutorActionContext{
    createLesson?:(subject:string,grade:string,payload:ILesson)=>void;
    getAllSubjects?:()=>void;
}

const TutorStateContext = createContext<ITutorStateContext>(INITIAL_STATE);

const TutorActionContext = createContext<ITutorActionContext>({});

export {TutorStateContext, TutorActionContext};