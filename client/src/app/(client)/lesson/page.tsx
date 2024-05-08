'use client'
import YouTubePlayer from '@/components/client/youtube';
import { useStudent } from '@/providers/studentProvider';
import { useTutor } from '@/providers/tutorProvider';
import { DownloadOutlined } from '@ant-design/icons';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC, Suspense, useEffect } from 'react';
import { useStyles } from './styles';

const Lesson:FC=()=>{
    const lessonName=useSearchParams().get('name');
    const subjectName=useSearchParams().get('subject');
    const {styles}=useStyles();
    const {subjects,getSubjects}=useStudent();
    const {allSubjects,getAllSubjects}=useTutor();
    const router =useRouter();

    useEffect(()=>{
        if(!localStorage.getItem('accessToken')){
          router.push('/');
        }
      },[])
    useEffect(()=>{

        if(localStorage.getItem('role')=='istudent'){
            if(getSubjects){
              getSubjects();
            }
          }else{
            if(getAllSubjects){
              getAllSubjects();
            }
          }
      },[])
      
    return(
        <Suspense fallback={<h1>lesson broke</h1>}>
            <div>
                <h1 style={{color:'gray'}}>{lessonName}</h1>
                <hr/>
                {lessonName=='Overview'&&<YouTubePlayer videoId={`https://www.youtube.com/watch?v=wtpvaTup00s`}/>}
                <YouTubePlayer videoId={subjects?(subjects?.filter(data=>data?.name==subjectName))?.at(0)?.lessons?.filter(data=>data?.topic===lessonName)[0]?.videoUrl:
                    allSubjects?.filter(data=>(data?.name+data?.grade==subjectName))?.at(0)?.lessons?.filter(data=>data?.topic===lessonName)[0]?.videoUrl
                }/>
                <p>Addtional information on lesson:</p>
                <hr/>
                {lessonName!=="Overview"&&

                    <div className={styles.tabsContainer}>
                        <div className={styles.tab}><a href={(subjects?.filter(data=>data?.name==subjectName))?.at(0)?.lessons?.filter(data=>data?.topic===lessonName)[0]?.notesUrl} target="_blank" style={{color:'white'}}><span>View notes</span></a></div>
                        <div className={styles.tab}><a href={(subjects?.filter(data=>data?.name==subjectName))?.at(0)?.lessons?.filter(data=>data?.topic===lessonName)[0]?.homeworkUrl} target="_blank" style={{color:'white'}}>Download Homework<DownloadOutlined style={{marginLeft:10}}/></a></div>
                    </div>
                } 
            </div>   
        </Suspense>
    );
}

export default Lesson;