
'use client'
import { message } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren, useContext, useEffect, useReducer } from 'react';
import { ILogin, ILoginResponse, IUser } from '../../../models/interface';
import { logOutUserRequestAction, loginSuccessAction, setCurrentUserRequestAction } from './actions';
import { INITIAL_STATE, IUserActionContext, IUserStateContext, UserActionContext, UserContext } from './context';
import { reducer } from './reducer';
import { getRole } from '@/utilis/decoder/decoder';


const AuthProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { push } = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const encryptedAccessToken = localStorage.getItem(
          "encryptedAccessToken",
        );
        const expireInSeconds_str = localStorage.getItem("expireInSeconds");
        const userId_str = localStorage.getItem("userId");
        const role = localStorage.getItem("role"); // Retrieve role from local storage
        let expireInSeconds =
          expireInSeconds_str === null
            ? 0
            : Number.parseInt(expireInSeconds_str);
        let userId = userId_str === null ? 0 : Number.parseInt(userId_str);
 
        if (
          accessToken &&
          encryptedAccessToken &&
          expireInSeconds &&
          userId &&
          role
        ) {
          const payload: ILoginResponse = {
            accessToken,
            encryptedAccessToken,
            userId,
            expireInSeconds,
            role: role, // Assign role to payload
          };
          dispatch(loginSuccessAction(payload));
        }
      } catch (error) {
        console.error("Error accessing localStorage: ", error);
      }
    }
  }, []);
 
  useEffect(() => {
    const accessToken = state.UserLogin?.accessToken;
    const encryptedAccessToken = state.UserLogin?.encryptedAccessToken;
    const expireInSeconds = state.UserLogin?.expireInSeconds;
    const userId = state.UserLogin?.userId;
    const role = state.UserLogin?.role;
 
    if (typeof window !== "undefined") {
      if (
        accessToken &&
        encryptedAccessToken &&
        expireInSeconds &&
        userId &&
        role
      ) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("encryptedAccessToken", encryptedAccessToken);
        localStorage.setItem("expireInSeconds", expireInSeconds + "");
        localStorage.setItem("userId", userId + "");
        localStorage.setItem("role", role + "");
      } else {
        localStorage.clear();
      }
    }
  }, [state]);


  const login = async (payload: ILogin) => {
  
      await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URI}TokenAuth/Authenticate`, payload)
      .then(response=>{
        const newRole =getRole(response.data.result);
        
        dispatch(loginSuccessAction({...response.data.result, role: newRole}));
        message.success('Login Success');
        console.log(newRole)
        if (newRole==='istudent'||newRole==='itutor') {
          push('/dashboard');
        } else {
          push('/admindash');
        }
      }
       ). catch (error=> {
        console.error('Login error:', error);
      // Optionally, provide user feedback about the login failure
    })
  }
  
  const createUser = async (payload: IUser) => {
    
      const response = await axios.post('',payload).then(response=>{
        message.success("User successfully created Login")
        push('/login')
      }).catch(response=>(
        message.error(response.error.message)))
  
  }

  const getUserDetails = async () => {
    
      await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URI}`+'/User/GetCurrentUser').then(response=>{
          dispatch(setCurrentUserRequestAction(response.data.result));
        })
        .catch( (error) =>{
          console.log(error)
        }).finally()
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