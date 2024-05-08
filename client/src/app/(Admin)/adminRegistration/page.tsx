'use client'
import { Table } from 'antd';
import {FC, Suspense, useEffect} from 'react';
import { useAdminActions ,useAdminState} from '@/providers/adminProvider';
import { useRouter } from 'next/navigation';
const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'First name',
      dataIndex: 'firstname',
      key: 'firstname',
    },
    {
      title: 'Last name',
      dataIndex: 'lastname',
      key: 'Username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
        title: 'Grade',
        dataIndex: 'grade',
        key: 'grade',
    },
    {
      title: 'Subjects',
      dataIndex: 'subjectIds',
      key: 'subjectIds',
      render:(subjectIds:string)=>(subjectIds.replaceAll(',',' / '))
    },
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
    },

  ];

const Registration:FC=()=>{
  const {getAllRegistration}=useAdminActions();
  const {registrationApplications}=useAdminState();
  const router=useRouter();
  useEffect(()=>{
    if(localStorage.getItem('role')!='admin'){
      router.push('/');
    }
  },[])
  useEffect(()=>{
    if(getAllRegistration){
      getAllRegistration();
    }

  },[])
    return(
        <Suspense fallback={<h1>Failed requests</h1>}>
            <div>
                <h1>Registration</h1>
                <hr/>
                <Table columns={columns} dataSource={registrationApplications} bordered={true} pagination={{pageSize:5}}/>
            </div>
        </Suspense>
        
    );
}

export default Registration;