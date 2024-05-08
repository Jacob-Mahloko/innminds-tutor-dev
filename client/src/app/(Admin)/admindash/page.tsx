'use client'
import { useRouter } from 'next/navigation';
import { FC, Suspense, useEffect } from 'react';
import { useStyles } from './styles';

const AdminDash:FC=()=>{
  const {styles}=useStyles();
  const router=useRouter()
  useEffect(()=>{
    if(localStorage.getItem('role')!='iadmin'||localStorage.getItem('role')!='admin'){
      router.push('/');
    }
  },[])
  return (
    <Suspense fallback={<h3>admin dashboard broke</h3>}>
      <div className={styles.dashtabs}>
          <div className={styles.tabs} onClick={()=>router.push('/adminRequest')} >Requests</div>
          <div className={styles.tabs} onClick={()=>router.push('/user?type=Student')}>Student Management</div>
          <div className={styles.tabs} onClick={()=>router.push('/user?type=Tutor')}>Tutor Management</div>
          <div className={styles.tabs} onClick={()=>router.push('/statistics')}>Statistics</div>
      </div>
    </Suspense>
  );
}

export default AdminDash;