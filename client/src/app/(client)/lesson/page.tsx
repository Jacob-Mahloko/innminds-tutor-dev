'use client'
import YouTubePlayer from '@/components/client/youtube';
import { useSearchParams } from 'next/navigation';
import { FC, Suspense, useEffect, useState } from 'react';
import {DownloadOutlined} from '@ant-design/icons'
import { useStyles } from './styles';
import { useStudent } from '@/providers/studentProvider';
import { ILesson, ISubject } from '../../../../models/interface';

const Lesson:FC=()=>{
    const lessonName=useSearchParams().get('name');
    const subjectName=useSearchParams().get('subject');
    const {styles}=useStyles();
    const {subjects,getSubjects}=useStudent();

    useEffect(()=>{

        if(!subjects){
          getSubjects();
        }
      },[])
      
    return(
        <Suspense fallback={<h1>lesson broke</h1>}>
            <div>
                <h1 style={{color:'gray'}}>{lessonName}</h1>
                <hr/>
                
                <YouTubePlayer videoId={(subjects?.filter(data=>data?.name==subjectName))?.at(0)?.lessons?.filter(data=>data?.topic===lessonName)[0]?.videoUrl}/>
                <p>Addtional information on lesson:</p>
                <hr/>
                {lessonName!=="Overview"&&
                    <div className={styles.tabsContainer}>
                        <div className={styles.tab}><a href={(subjects?.filter(data=>data?.name==subjectName))?.at(0)?.lessons?.filter(data=>data?.topic===lessonName)[0]?.notesUrl} target="_blank" style={{color:'white'}}><span>View notes</span></a></div>
                        <div className={styles.tab}><a href={(subjects?.filter(data=>data?.name==subjectName))?.at(0)?.lessons?.filter(data=>data?.topic===lessonName)[0]?.homeworkUrl} target="_blank" style={{color:'white'}}>Download Homework<DownloadOutlined style={{marginLeft:10}}/></a></div>
                        <div className={styles.tab}>Send Tutor Message</div>
                    </div>
                } 
            </div>   
        </Suspense>
    );
}

export default Lesson;