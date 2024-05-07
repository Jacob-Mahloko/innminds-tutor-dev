'use client'
import { Button, Table } from 'antd';
import { Suspense } from 'react';
import { useStyles } from './styles';
import { useSearchParams,useRouter } from 'next/navigation';
import SearchBar from '@/components/searchbar';
import { useSearch } from '@/utilis/admin/search/helper';
import { useAdmin } from '@/providers/adminProvider';
const User=()=>{

  
    const {styles}=useStyles();
    const type=useSearchParams().get('type');
    const router=useRouter();
    const {columns}=useSearch();
    const {searchTutorState,searchStudentState}=useAdmin();

    console.log(searchStudentState)
    return(
      <Suspense fallback={<h1>Failed create user</h1>}>
        <div className={styles.container}>
          <SearchBar/>
          <div className={styles.content}>
            {((type=='Student'&&searchStudentState!=undefined)||(type=='Tutor'&&searchTutorState!=undefined))?
            <div>
                  <h3>{type} Search Result</h3>
                  <hr/>
                  <Table style={{width:'140vb'}} columns={columns} dataSource={type=='Student'?searchStudentState?.map(data=>({...data,key:data.id})):searchTutorState?.map(data=>({...data,key:data.id}))}/>
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