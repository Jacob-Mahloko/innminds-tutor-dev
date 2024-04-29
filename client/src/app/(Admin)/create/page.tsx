'use client'
import CreateUser from "@/components/admin/CreateUser/CreateUser";
import { FC, Suspense } from 'react';
import { useSearchParams } from "next/navigation";

const Create:FC=()=>{
      const type=useSearchParams().get('type');
    return(
        <Suspense fallback={<h3>Createuser broke</h3>}>
            <CreateUser type={type}/>
        </Suspense>
    );
}

export default Create;