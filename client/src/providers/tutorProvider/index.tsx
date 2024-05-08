
'use client'
import { message } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren, useContext, useReducer } from 'react';
import { ILesson } from '../../../models/interface';
import { INITIAL_STATE, ITutorActionContext, ITutorStateContext, TutorActionContext, TutorStateContext } from './context';
import { reducer } from './reducer';
import { GetAllSubjectsAction } from './action';

const TutorProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { push } = useRouter();

  

  const createLesson= async (subject:string,grade:string,payload:ILesson)=>{
  
    await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URI}services/app/Subject/AddLesson?grade=${grade}&name=${subject}`,payload)
    .then(res=>{message.success("Successfully created Lesson")})
    .catch(err=>console.log(err))
  }

  const getAllSubjects=()=>{
      axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URI}services/app/Subject/GetAllSubject`)
      .then(res=>{console.log(res.data.result);dispatch(GetAllSubjectsAction(res.data.result))})
      .catch(err=>console.log(err))
  }

  return (
    <TutorStateContext.Provider value={{...state}}>
      <TutorActionContext.Provider value={{ createLesson,getAllSubjects}}>
        {children}
      </TutorActionContext.Provider>
    </TutorStateContext.Provider>
  );
};


export const useTutorState = (): ITutorStateContext => {
  const context = useContext(TutorStateContext);
  if (!context) {
    throw new Error("useLoginState must be used within a UserProvider");
  }
  return context;
};

export const useTutorActions = ():  ITutorActionContext=> {
  const context = useContext(TutorActionContext);
  if (!context) {
    throw new Error("useLoginActions must be used within a UserProvider");
  }
  return context;
};

export const useTutor = (): ITutorStateContext & ITutorActionContext => {
  return {
    ...useTutorState(),
    ...useTutorActions()
  };
};

export default TutorProvider;