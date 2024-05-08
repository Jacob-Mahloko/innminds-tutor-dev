import { EditOutlined, PlusCircleOutlined, UserOutlined,LogoutOutlined,BarChartOutlined,ReconciliationOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { IRequest } from '../../../../models/interface';
import { RequestEnum } from '@/utilis/defaults/default';
const {Option}=Select;

export const useRequest=()=>{
    const columns = [
        {
          title: 'Type',
          dataIndex: 'reason',
          key: 'reason',
        },
        {
          title: 'Details',
          dataIndex: 'info',
          key: 'info',
        },
        {
          title: 'Username',
          dataIndex: 'username',
          key: 'Username',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render:(status:string,req:IRequest )=>
              (
              <Select
                key={status}
                defaultValue={status}
              >
                <Option value={RequestEnum.Await}>{RequestEnum.Await}</Option>
                <Option value={RequestEnum.Process}>{RequestEnum.Process}</Option>
                <Option value={RequestEnum.Completed}>{RequestEnum.Completed}</Option>
              </Select>
              )
        
          },
      ];
    return {columns};
}