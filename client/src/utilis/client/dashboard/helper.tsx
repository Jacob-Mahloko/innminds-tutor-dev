import { FolderOpenOutlined,BookOutlined,UserOutlined,CalendarOutlined,ScheduleOutlined,LogoutOutlined ,BarChartOutlined, PlusCircleOutlined} from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const useClientDashHelper=()=>{
    const router=useRouter();
    const [filter,setFilter]=useState(false)
    useEffect(()=>{
      if(localStorage.getItem('role')!='itutor'){
        setFilter(true);
      }

    },[])
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
    
    const citems = [FolderOpenOutlined,BookOutlined,CalendarOutlined,BarChartOutlined,UserOutlined,PlusCircleOutlined,LogoutOutlined].map(
      (icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: labels[index],
        onClick:functions[labels[index]]
      }),
    );
    const items=filter?citems.filter((data,index)=>index!=5):citems;
    return {items};
    }

    export default useClientDashHelper;