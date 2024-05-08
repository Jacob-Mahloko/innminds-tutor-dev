
'use client'
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren, useContext, useReducer } from 'react';
import { INITIAL_STATE, AdminActionContext, AdminStateContext ,IAdminActionContext,IAdminStateContext} from './context';
import { reducer } from './reducer';
import axios from 'axios'
import { GetGradeStatistics, GetRegistrationApplications, GetRequests, GetSubjectByGrade, GetSubjectStatistics, SearchStudentAction, SearchTutorAction } from './action';
import { message } from 'antd';
import { IApplication, IQuery, IStudent, ITutor } from '../../../models/interface';


const AdminProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { push } = useRouter();

  const getSubjectByGrade=(grade:string)=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URI}services/app/Subject/GetSubjectByGrade?grade=${grade}`)
    .then(res=>{dispatch(GetSubjectByGrade(res.data.result))}).catch(err=>console.log(err))
  }

  const sendApplication =(payload:IApplication)=>{
    axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URI}services/app/Registration/Create`,payload)
    .then(res=>{
      message.success(`${payload.type} Application Success`);
      message.success(`Expect an email within 48 hours`);
    })
  }

  const getAllRegistration=()=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URI}services/app/Registration/GetAllRegistration`)
    .then(res=>{message.loading('loading');dispatch(GetRegistrationApplications(res.data.result))})
    .catch(err=>console.log(err))
  }

  const registerStudent=(payload:IStudent)=>{
    axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URI}services/app/Student/CreateStudent`,payload)
    .then(()=>{message.success('Successfully Created Student')})
    .catch(err=>console.log(err))
  }
  const registerTutor=(payload:IStudent)=>{
    axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URI}services/app/Tutor/CreateTutor`,{...payload,subjects:payload.subjectIds.join(',')})
    .then(()=>{message.success('Successfully Created Tutor')})
    .catch(err=>console.log(err))
  }
  
  const getRequests=async ()=>{
    await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URI}services/app/Request/GetAll`,{
      headers:{
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    })
  .then(res=>{
     dispatch(GetRequests(res.data.result))
  })
  .catch(err=>{console.log(err)})
  }


  const searchStudent=async (payload:IQuery)=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URI}services/app/Student/GetAllStudent?searchTerm=${payload.searchTerm}`)
    .then(res=>{message.loading('loading');dispatch(SearchStudentAction(res.data.result))})
    .catch(err=>console.log(err));
  }
  const searchTutor=async (payload:IQuery)=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URI}services/app/Tutor/GetAllTutor?searchTerm=${payload.searchTerm}`)
    .then(res=>{message.loading('loading');dispatch(SearchTutorAction(res.data.result))})
  }
  
  const getGradeStat=async ()=>{
    await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URI}services/app/StudentClassRoom/GetNumberofStudentInGrades`)
    .then(res=>{dispatch(GetGradeStatistics(res.data.result))})
    .catch(err=>console.log(err))
  }

  const getSubjectStat=async ()=>{
    await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URI}services/app/StudentClassRoom/GetNumberofStudentInGradesSubject`)
    .then(res=>{dispatch(GetSubjectStatistics(res.data.result))})
    .catch(err=>console.log(err)) 
  }
  return (
    <AdminStateContext.Provider value={{...state}}>
      <AdminActionContext.Provider value={{ getSubjectByGrade,sendApplication,getAllRegistration,registerStudent,getRequests,searchStudent,searchTutor,getGradeStat,getSubjectStat,registerTutor}}>
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
  const context = useContext(AdminActionContext);
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