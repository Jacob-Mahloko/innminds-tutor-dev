import { EditOutlined, LogoutOutlined, PlusCircleOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const useLogin=()=>{
    const router=useRouter();
    const [showProfile,setShowProfile]=useState<boolean>(false);
    
    
    enum functionType{
        LOGIN='Login',
        GET_TUTOR='Get A Tutor',
        BECOME_TUTOR='Become A Tutor',
    }

    const functions={
        [functionType.LOGIN]:()=>{router.push('/login')},
        [functionType.GET_TUTOR]:()=>{router.push('/getTutor')},
        [functionType.BECOME_TUTOR]:()=>{router.push('/login')}
    }


    const labels:functionType[]=[functionType.LOGIN,functionType.GET_TUTOR,functionType.BECOME_TUTOR]
    const items = [UserOutlined,  PlusCircleOutlined,EditOutlined].map(
      (icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: labels[index],
        onClick:functions[labels[index]]
      }),
    );
    return {items};
    }

    export default useLogin;