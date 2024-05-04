
'use client'
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren, useContext, useReducer } from 'react';

import { INITIAL_STATE, StudentActionContext, StudentStateContext ,IStudentActionContext,IStudentStateContext} from './context';
import { reducer } from './reducer';


const StudentProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { push } = useRouter();

  

  return (
    <StudentStateContext.Provider value={{}}>
      <StudentActionContext.Provider value={{ }}>
        {children}
      </StudentActionContext.Provider>
    </StudentStateContext.Provider>
  );
};


export const useStudentState = (): IStudentStateContext => {
  const context = useContext(StudentStateContext);
  if (!context) {
    throw new Error("useLoginState must be used within a UserProvider");
  }
  return context;
};

export const useStudentActions = ():  IStudentActionContext=> {
  const context = useContext(StudentStateContext);
  if (!context) {
    throw new Error("useLoginActions must be used within a UserProvider");
  }
  return context;
};

export const useStudent = (): IStudentStateContext & IStudentActionContext => {
  return {
    ...useStudentState(),
    ...useStudentActions()
  };
};

export default StudentProvider;