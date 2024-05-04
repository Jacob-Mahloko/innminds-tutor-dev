import { createContext } from 'react';


export const INITIAL_STATE: IAdminStateContext={}

export interface IAdminStateContext {
   
}

export interface IAdminActionContext{
    
}

const AdminStateContext = createContext<IAdminStateContext>(INITIAL_STATE);

const AdminActionContext = createContext<IAdminActionContext>({});

export {AdminStateContext, AdminActionContext};