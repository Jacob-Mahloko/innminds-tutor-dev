import { createContext } from 'react';


export const INITIAL_STATE: IStudentStateContext={}

export interface IStudentStateContext {
   
}

export interface IStudentActionContext{
    
}

const StudentStateContext = createContext<IStudentStateContext>(INITIAL_STATE);

const StudentActionContext = createContext<IStudentActionContext>({});

export {StudentStateContext, StudentActionContext};