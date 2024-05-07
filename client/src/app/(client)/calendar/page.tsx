'use client'
import { useStudent } from '@/providers/studentProvider';
import type { BadgeProps } from 'antd';
import { Badge, Calendar } from 'antd';
import type { Dayjs } from 'dayjs';
import { FC, useEffect, useState } from 'react';
import { ILesson } from '../../../../models/interface';
import { useStyles } from './styles';


const ACalendar: FC = () => {
  
    const {getLessons,lessons}=useStudent();
    const [data,setData]=useState<ILesson[]>(lessons);
    
    const [date,setDate]=useState<string>();
    const {styles} =useStyles();


  useEffect(()=>{
    if(getLessons){getLessons()}
  },[])

  const getDateTuple=(date: string)=> {
        const dateObj = new Date(date);
        return [dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate()];
  }
    
    const dateCellRender = (value: Dayjs) => {
        // search for the loan that matches the date
        const loan = lessons?.find((loan) => {
            const dueDate = getDateTuple(loan.dueDate);
            return value.year() === dueDate[0] && value.month() === dueDate[1] && value.date() === dueDate[2];
        });

        console.log(loan)
        return (loan!=undefined?
             <ul className="events" style={{marginLeft:-30,overflowX:'hidden',scrollbarWidth:'thin'}} >
                <li>{loan?.topic}</li>
             </ul>:<></>
          );
    }

  const cellRender = (current: any, info: any) => {
        if (!current || !info) {
         
        } else {
            return dateCellRender(current);
        }
    }

  
  return(
    <div>  
        <h1>Calendar</h1>
        <hr/>
        <div className={styles.sideBar}>

            <Calendar cellRender={cellRender} className={styles.calendar} fullscreen={false} onSelect={(e)=>setDate(e.format('YYYY-MM-DD'))}/>
            <div className={styles.container}>
                <h1 style={{color:'gray',marginLeft:30}}>Events</h1>
                {(lessons?.filter(res=>res.dueDate==date))?.map(data=>(
                    <div key={data.topic} style={{backgroundColor:'gray',height:100,textAlign:'center',color:'white',borderRadius:5,margin:10}}>
                        <h3 style={{marginTop:10}}>{'Homework'}</h3>
                        <p>{data.topic}<br/></p>
                    </div>
                ))}
                
            </div>
        </div>
    </div>
  ); 
  
  
};

export default ACalendar;