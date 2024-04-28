'use client'
import { useRouter } from 'next/navigation';
import { FC, Suspense } from 'react';
import { useStyles } from './styles';

const subjects=[{key:1,subject:"Physical Science",color:'red'},{key:2,subject:"Mathematics",color:'green'},{key:3,subject:"Life Science",color:'blue'},{key:4,subject:"Computer Science",color:'pink'}]
const Dashboard:FC=()=>{
  const {styles}=useStyles();
  const router=useRouter()
  return (
    <Suspense fallback={<h3>dashboard broke</h3>}>
        <h2 style={{textDecoration:'none',marginTop:25}}>Subjects</h2>
        <hr/>
        <div className={styles.dashtabs}>
            
            {subjects.map(data=>(
                <div key={data.key} className={styles.tabs} style={{backgroundColor:data.color}} onClick={()=>router.push(`/subject?name=${data.subject}`)} >{data.subject}</div>
            ))}
        </div>
    </Suspense>
  );
}

export default Dashboard;