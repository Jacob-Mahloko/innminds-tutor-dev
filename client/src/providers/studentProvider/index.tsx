
'use client'
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren, useContext, useReducer } from 'react';
import { useUser} from '../authProvider';
import { INITIAL_STATE, StudentActionContext, StudentStateContext ,IStudentActionContext,IStudentStateContext} from './context';
import { reducer } from './reducer';
import axios from 'axios';
import { GetLesson, GetProfile, GetSubject } from './action';
import { IQuery, IRequest, IStudent } from '../../../models/interface';
import { message } from 'antd';


const StudentProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { push } = useRouter();
  const {UserLogin}=useUser();

  const getSubjects = async () =>{
    await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URI}services/app/StudentClassRoom/GetStudentSubjects`,{
      headers:{
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    })
    .then(res=>{
       dispatch(GetSubject(res.data.result))
    })
    .catch(err=>{console.log(err)})
  }

  const getStudentProfile=async ()=>{
    await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URI}services/app/Student/GetCurrentStudent`,{
      headers:{
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    })
    .then(res=>{
       dispatch(GetProfile(res.data.result))
    })
    .catch(err=>{console.log()})
  }

  const sendStudentRequest=(payload:IRequest)=>{
    axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URI}services/app/Request/Create`,payload,
    {
      headers:{
        'Authorization': `Bearer ${UserLogin?.accessToken}`,
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    }
    )
    .then((res)=>message.success('request sent successfully'))
    .catch(err=>{console.log(err)})
  }

  const getLessons=async ()=>{
    await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URI}services/app/StudentClassRoom/GetStudentLesson`,
    {
      headers:{
        'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    }
    )
    .then((res)=>{dispatch(GetLesson(res.data.result))})
    .catch(err=>{console.log(err)})
  }

  const editProfile=async (payload:IStudent)=>{
    const formData = new FormData();
    formData.append('id',payload.id.toString());
    formData.append('name',payload.name.toString());
    formData.append('surname',payload.surname.toString());
    formData.append('username',payload.username.toString());
    formData.append('grade',payload.grade.toString());
    if(payload.file!=null){
      formData.append('file',payload.file);
    }
    formData.append('email',payload.email.toString());
    formData.append('about',payload.about.toString());
    formData.append('phoneNumber',payload.phoneNumber.toString());
   

    //console.log(formData.getAll('file'))
     await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URI}services/app/Student/UpdateStudent`,formData,
      { headers: {
        'Content-Type': 'multipart/form-data',
      }}
     )
     .then(res=>{
       message.success("Successfully");
       dispatch(GetProfile(res.data.result))
     })
     .catch(err=>console.log(err))
  }

  return (
    <StudentStateContext.Provider value={{...state}}>
      <StudentActionContext.Provider value={{getSubjects,getStudentProfile,sendStudentRequest,getLessons,editProfile}}>
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
  const context = useContext(StudentActionContext);
  if (!context) {
    throw new Error("useLoginActions must be used within a UserProvider");
  }
  return context;
};

export const useStudent = () : IStudentStateContext & IStudentActionContext => {
  return{
    ...useStudentState(),
    ...useStudentActions()
  };
};

export default StudentProvider;