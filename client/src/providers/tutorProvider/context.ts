import { createContext } from 'react';


export const INITIAL_STATE: ITutorStateContext={}

export interface ITutorStateContext {
   
}

export interface ITutorActionContext{
    
}

const TutorStateContext = createContext<ITutorStateContext>(INITIAL_STATE);

const TutorActionContext = createContext<ITutorActionContext>({});

export {TutorStateContext, TutorActionContext};