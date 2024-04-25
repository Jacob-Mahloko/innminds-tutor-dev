
'use client'
import { Button } from 'antd';
import { Suspense } from 'react';
import { useStyles } from './styles';
import { useSearchParams,useRouter } from 'next/navigation';
import SearchBar from '@/components/searchbar';

const User=()=>{

  
    const {styles}=useStyles();
    const type=useSearchParams().get('type');
    const router=useRouter();
      
    return(
      <Suspense fallback={<div />}>
        <div className={styles.container}>
        <SearchBar/>
        <div className={styles.content}>
          <Button className={styles.button} onClick={()=>router.push(`/create?type=${type}`)}>Create {type}</Button>
        </div>
        </div>
      </Suspense>
    );
}

export default User;