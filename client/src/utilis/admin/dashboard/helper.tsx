import { EditOutlined, PlusCircleOutlined, UserOutlined,LogoutOutlined,BarChartOutlined,ReconciliationOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const useDashHelper=()=>{
    const router=useRouter();

    enum functionType{
        
        DASHBOARD='Dashboard',
        MANAGE_STUDENT='Manage Student',
        MANAGE_TUTOR='Manage Tutor',
        REQUESTS='Requests',
        STATISTICS='Statistics',
        REGISTRATION='Registration',
        LOGOUT='Log out'
    }

    const functions={
        [functionType.DASHBOARD]:()=>{router.push('/admindash')},
        [functionType.MANAGE_STUDENT]:()=>{router.push('/user?type=Student')},
        [functionType.MANAGE_TUTOR]:()=>{router.push('/user?type=Tutor')},
        [functionType.REQUESTS]:()=>{router.push('/adminRequest')},
        [functionType.STATISTICS]:()=>{router.push('/statistics')},
        [functionType.REGISTRATION]:()=>{router.push('/adminRegistration')},
        [functionType.LOGOUT]:()=>{router.push('/login')},
    }

    const labels:functionType[]=[functionType.DASHBOARD,functionType.MANAGE_STUDENT,functionType.MANAGE_TUTOR,functionType.REQUESTS,functionType.STATISTICS,functionType.REGISTRATION,functionType.LOGOUT]
    const items = [UserOutlined,  PlusCircleOutlined,EditOutlined,ReconciliationOutlined,BarChartOutlined,UserOutlined,LogoutOutlined].map(
      (icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: labels[index],
        onClick:functions[labels[index]]
      }),
    );

    return {items};
    }

    export default useDashHelper;