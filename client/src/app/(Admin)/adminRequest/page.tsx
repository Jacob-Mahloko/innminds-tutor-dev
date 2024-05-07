'use client'
import { Select, Table } from 'antd';
import {FC, Suspense, useEffect} from 'react';
import { useAdmin } from '@/providers/adminProvider';
import { RequestEnum } from '@/utilis/defaults/default';
import { Label } from 'recharts';
import { IRequest } from '../../../../models/interface';
import { useRequest } from '@/utilis/admin/requests/helper';



const {Option}=Select;

const Requests:FC=()=>{
  const {requests,getRequests}=useAdmin();
  const {columns} = useRequest();
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