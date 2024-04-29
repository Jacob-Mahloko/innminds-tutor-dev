import { Table } from 'antd';
import {FC} from 'react';

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
        <div>
            <h1>Requests</h1>
            <hr/>
            <Table columns={columns}/>
        </div>
        
    );
}

export default Requests;