'use client'
import SearchBar from '@/components/searchbar';
import { useAdmin } from '@/providers/adminProvider';
import { useSearch } from '@/utilis/admin/search/helper';
import { Button, Table } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import { IStudent } from '../../../../models/interface';
import { useStyles } from './styles';

const User=()=>{

  
    const {styles}=useStyles();
    const type=useSearchParams().get('type');
    const router=useRouter();
    const {columns}=useSearch();
    const {searchTutorState,searchStudentState}=useAdmin();
    const check:IStudent[]=[];
    useEffect(()=>{
      if(localStorage.getItem('role')!='iadmin'||localStorage.getItem('role')!='admin'){
        router.push('/');
      }
    },[])

    return(
      <Suspense fallback={<h1>Failed create user</h1>}>
        <div className={styles.container}>
          <SearchBar/>
          <div className={styles.content}>
            {((type=='Student'&&searchStudentState!=null)||(type=='Tutor'&&searchTutorState!=null))?
            <div>
              {searchStudentState.at(0)!=undefined||searchStudentState.at(0)!=null?
                  <>                  
                    <h3>{type} Search Result</h3>
                    <hr/>
                    <Table style={{width:'140vb'}} columns={columns} dataSource={type=='Student'?searchStudentState?.map(data=>({...data,key:data.id})):searchTutorState?.map(data=>({...data,key:data.id}))}/>
                  </>
                  : <Button className={styles.button} onClick={()=>router.push(`/create?type=${type}`)}>Create {type}</Button>}
              </div>
            :
            <Button className={styles.button} onClick={()=>router.push(`/create?type=${type}`)}>Create {type}</Button>
            }
          </div>
        </div>
      </Suspense>
    );
}

export default User;