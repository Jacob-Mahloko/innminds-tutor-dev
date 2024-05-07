import { FolderOpenOutlined,BookOutlined,UserOutlined,CalendarOutlined,ScheduleOutlined,LogoutOutlined ,BarChartOutlined, PlusCircleOutlined} from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const useClientDashHelper=()=>{
    const router=useRouter();

    enum functionType{
        
        DASHBOARD='Dashboard',
        REQUEST='Requests',
        CALENDAR='Calendar',
        GRADE='Grade Centre',
        PROFILE='Profile',
        AddLesson='Add Lesson',
        LOGOUT='Log out'
    }

    const functions={
        [functionType.DASHBOARD]:()=>{router.push('/dashboard')},
        [functionType.REQUEST]:()=>{router.push('/requests')},
        [functionType.CALENDAR]:()=>{router.push('/calendar')},
        [functionType.GRADE]:()=>{router.push('/grades')},
        [functionType.PROFILE]:()=>{router.push('/profile')},
        [functionType.AddLesson]:()=>{router.push('/addLesson')},
        [functionType.LOGOUT]:()=>{router.push('/login')},
    }

    const labels:functionType[]=[functionType.DASHBOARD,functionType.REQUEST,functionType.CALENDAR,functionType.GRADE,functionType.PROFILE,functionType.AddLesson,functionType.LOGOUT]
    const items = [FolderOpenOutlined,BookOutlined,CalendarOutlined,BarChartOutlined,UserOutlined,PlusCircleOutlined,LogoutOutlined].map(
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