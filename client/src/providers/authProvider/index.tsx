
'use client'
import React, { FC, PropsWithChildren, useContext, useReducer } from 'react';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { reducer} from './reducer';
import { INITIAL_STATE, IUserActionContext, IUserStateContext, UserActionContext, UserContext } from './context';
import { loginUserRequestAction,logOutUserRequestAction,setCurrentUserRequestAction} from './actions';
import { ILogin ,IUser} from '../../../models/interface';
import instance from '..';

const AuthProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { push } = useRouter();


  const login = async (payload: ILogin) => {
        await instance.post('TokenAuth/Authenticate',payload).then(async (response)=>
          {

            dispatch(loginUserRequestAction(response.data.result))
            await getUserDetails(response.data.result.accessToken).then(()=>{
              
            }).catch(error=>{
                              message.error(error)
                              logOutUser();
                            })
            })
            .catch((response)=>message.error(response.response.data.error.message));
  }

  const createUser = async (payload: IUser) => {
    
      const response = await instance.post('',payload).then(response=>{
        message.success("User successfully created Login")
        push('/login')
      }).catch(response=>(
        message.error(response.error.message)))
  
  }

  const getUserDetails = async (token?:any) => {
    
      await instance.get(`${process.env.NEXT_PUBLIC_API_BASE_URI}`).then(response=>{
          if(response.data.result==null){
            throw "Select Correct User";
          }
          dispatch(setCurrentUserRequestAction(response.data.result));
        })
        .catch( (error) =>{

        })
  }

  const logOutUser = () => {
    dispatch(logOutUserRequestAction());
    
  };



  return (
    <UserContext.Provider value={{...state}}>
      <UserActionContext.Provider value={{ login, createUser, logOutUser, getUserDetails }}>
        
        {children}
      </UserActionContext.Provider>
    </UserContext.Provider>
  );
};


export const useLoginState = (): IUserStateContext => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useLoginState must be used within a UserProvider");
  }
  return context;
};

export const useLoginActions = (): IUserActionContext => {
  const context = useContext(UserActionContext);
  if (!context) {
    throw new Error("useLoginActions must be used within a UserProvider");
  }
  return context;
};

export const useUser = (): IUserStateContext & IUserActionContext => {
  return {
    ...useLoginState(),
    ...useLoginActions()
  };
};

export default AuthProvider;