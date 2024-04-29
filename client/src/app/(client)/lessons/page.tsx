'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { FC, Suspense } from 'react';
import { useStyles } from './styles';

const subject= [{key:1,Topic:"Topic 1",route:`lesson?name=topic1`,color:'red'},
                {key:2,Topic:"Topic 2",route:`lesson?name=topic2`,color:'green'},
                {key:3,Topic:"Topic 3",route:`lesson?name=topic3`,color:'blue'},
                {key:4,Topic:"Topic 4",route:`lesson?name=topic4`,color:'pink'},
                {key:5,Topic:"Topic 5",route:`lesson?name=topic5`,color:'orange'},
                {key:6,Topic:"Topic 6",route:`lesson?name=topic6`,color:'violet'},
                ]

const Lessons:FC=()=>{
  const {styles}=useStyles();
  const router=useRouter();
  const subjectName=useSearchParams().get('name');
  return (<Suspense fallback={<h3>Lessons failed</h3>}>
    <h2 style={{textDecoration:'none',marginTop:25}}>Lessons</h2>
    <hr/>
    <div className={styles.dashtabs}>
        
        {subject.map(data=>(
            <div key={data.key} className={styles.tabs} style={{backgroundColor:data.color}} onClick={()=>router.push(`/${data.route}`)} >{data.Topic}</div>
        ))}
    </div>
    </Suspense>
  );
}

export default Lessons;