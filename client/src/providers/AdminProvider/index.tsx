
'use client'
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren, useContext, useReducer } from 'react';
import { INITIAL_STATE, AdminActionContext, AdminStateContext ,IAdminActionContext,IAdminStateContext} from './context';
import { reducer } from './reducer';


const AdminProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { push } = useRouter();

  

  return (
    <AdminStateContext.Provider value={{}}>
      <AdminActionContext.Provider value={{ }}>
        {children}
      </AdminActionContext.Provider>
    </AdminStateContext.Provider>
  );
};


export const useAdminState = (): IAdminStateContext => {
  const context = useContext(AdminStateContext);
  if (!context) {
    throw new Error("useLoginState must be used within a UserProvider");
  }
  return context;
};

export const useAdminActions = ():  IAdminActionContext=> {
  const context = useContext(AdminStateContext);
  if (!context) {
    throw new Error("useLoginActions must be used within a UserProvider");
  }
  return context;
};

export const useAdmin = (): IAdminStateContext & IAdminActionContext => {
  return {
    ...useAdminState(),
    ...useAdminActions()
  };
};

export default AdminProvider;