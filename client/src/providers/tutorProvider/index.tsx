
'use client'
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren, useContext, useReducer } from 'react';
import { INITIAL_STATE, TutorActionContext, TutorStateContext ,ITutorActionContext,ITutorStateContext} from './context';
import { reducer } from './reducer';


const TutorProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { push } = useRouter();

  

  return (
    <TutorStateContext.Provider value={{}}>
      <TutorActionContext.Provider value={{ }}>
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
  const context = useContext(TutorStateContext);
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