'use client'
import { Table } from 'antd';
import {FC, Suspense} from 'react';

const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Details',
      dataIndex: 'detail',
      key: 'detail',
    },
    {
      title: 'Username',
      dataIndex: 'Username',
      key: 'Username',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
      },
  ];

const Requests:FC=()=>{
    return(
        <Suspense fallback={<h1>Failed requests</h1>}>
            <div>
                <h1>Requests</h1>
                <hr/>
                <Table columns={columns}/>
            </div>
        </Suspense>
        
    );
}

export default Requests;