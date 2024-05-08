'use client'
import CreateUser from "@/components/admin/CreateUser/CreateUser";
import { FC, Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from "next/navigation";

const Create:FC=()=>{
      const type=useSearchParams().get('type');
      const router=useRouter();

      useEffect(()=>{
        if(localStorage.getItem('role')!='admin'){
          router.push('/');
        }
      },[])
    return(
        <Suspense fallback={<h3>Createuser broke</h3>}>
            <CreateUser type={type}/>
        </Suspense>
    );
}

export default Create;