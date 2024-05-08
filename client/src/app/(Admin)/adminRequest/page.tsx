'use client'
import { useAdmin } from '@/providers/adminProvider';
import { useRequest } from '@/utilis/admin/requests/helper';
import { Select, Table } from 'antd';
import { useRouter } from 'next/navigation';
import { FC, Suspense, useEffect } from 'react';



const {Option}=Select;

const Requests:FC=()=>{
  const {requests,getRequests}=useAdmin();
  const {columns} = useRequest();
  const router =useRouter();
  
  useEffect(()=>{
    if(localStorage.getItem('role')!='admin'){
      router.push('/');
    }
  },[])
  useEffect(()=>{
    if(!requests){
        getRequests();
    }
  },[])
    return(
        <Suspense fallback={<h1>Failed requests</h1>}>
            <div>
                <h1>Requests</h1>
                <hr/>
                <Table columns={columns} dataSource={requests?.map(data=>({...data,key:data.id}))}/>
            </div>
        </Suspense>
        
    );
}

export default Requests;