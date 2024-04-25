import { EditOutlined, PlusCircleOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const useLogin=()=>{
    const router=useRouter();

    enum functionType{
        LOGIN='Login',
        GET_TUTOR='Get A Tutor',
        BECOME_TUTOR='Become A Tutor',
    }

    const functions={
        [functionType.LOGIN]:()=>{router.push('/login')},
        [functionType.GET_TUTOR]:()=>{router.push('/registration?type=student')},
        [functionType.BECOME_TUTOR]:()=>{router.push('/registration?type=tutor')}
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