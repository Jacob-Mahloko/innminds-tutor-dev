'use client'
import YouTubePlayer from '@/components/client/youtube';
import { useSearchParams } from 'next/navigation';
import { FC, Suspense } from 'react';
import {DownloadOutlined} from '@ant-design/icons'
import { useStyles } from './styles';

const Lesson:FC=()=>{
    const lessonName=useSearchParams().get('name');
    const {styles}=useStyles();
    return(
        <Suspense fallback={<h1>lesson broke</h1>}>
            <div>
                <h1 style={{color:'gray'}}>{lessonName}</h1>
                <hr/>
                
                <YouTubePlayer videoId=''/>
                <p>Addtional information on lesson:</p>
                <hr/>
                {lessonName!=="Overview"&&
                    <div className={styles.tabsContainer}>
                        <div className={styles.tab}><a href={"https://drive.google.com/file/d/1Pkk9iNZ3NhK0uom766rZjdlyUeki6p-F/view?usp=sharing"} style={{color:'white'}}><span>View notes</span></a></div>
                        <div className={styles.tab}><a href={"https://drive.google.com/file/d/1Pkk9iNZ3NhK0uom766rZjdlyUeki6p-F/view?usp=sharing"} style={{color:'white'}}>Download Homework<DownloadOutlined style={{marginLeft:10}}/></a></div>
                        <div className={styles.tab}>Send Tutor Message</div>
                    </div>
                } 
            </div>   
        </Suspense>
    );
}

export default Lesson;