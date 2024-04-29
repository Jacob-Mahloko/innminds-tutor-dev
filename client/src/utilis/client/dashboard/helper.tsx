import { FolderOpenOutlined,BookOutlined,UserOutlined,CalendarOutlined,ScheduleOutlined,LogoutOutlined ,BarChartOutlined} from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const useClientDashHelper=()=>{
    const router=useRouter();

    enum functionType{
        
        DASHBOARD='Dashboard',
        REQUEST='Requests',
        CALENDAR='Calendar',
        SCHEDULE='Schedule',
        GRADE='Grade Centre',
        PROFILE='Profile',
        LOGOUT='Log out'
    }

    const functions={
        [functionType.DASHBOARD]:()=>{router.push('/dashboard')},
        [functionType.REQUEST]:()=>{router.push('/requests')},
        [functionType.CALENDAR]:()=>{router.push('/calendar')},
        [functionType.SCHEDULE]:()=>{router.push('/schedule')},
        [functionType.GRADE]:()=>{router.push('/grades')},
        [functionType.PROFILE]:()=>{router.push('/profile')},
        [functionType.LOGOUT]:()=>{router.push('/login')},
    }

    const labels:functionType[]=[functionType.DASHBOARD,functionType.REQUEST,functionType.CALENDAR,functionType.SCHEDULE,functionType.GRADE,functionType.PROFILE,functionType.LOGOUT]
    const items = [FolderOpenOutlined,BookOutlined,CalendarOutlined,ScheduleOutlined,BarChartOutlined,UserOutlined,LogoutOutlined].map(
      (icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: labels[index],
        onClick:functions[labels[index]]
      }),
    );

    return {items};
    }

    export default useClientDashHelper;