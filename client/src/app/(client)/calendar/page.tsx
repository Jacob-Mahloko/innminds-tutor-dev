'use client'
import {FC, useState} from 'react';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar } from 'antd';
import type { Dayjs } from 'dayjs';
import { IEvent } from '../../../../models/interface';
import { useStyles } from './styles';

const getListData = (value: Dayjs) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'error', content: 'Physical Science' },
        { type: 'error', content: 'Mathematics' },
        { type: 'error', content: 'Computer Science' },
        { type: 'error', content: 'Life Science' },
      ];
      break;
    case 10:
      listData = [
        { type: 'error', content: 'Physical Science' },
        { type: 'error', content: 'Mathematics' },
        { type: 'error', content: 'Computer Science' },
        { type: 'error', content: 'Life Science' },
      ];
      break;
    case 15:
      listData = [
        { type: 'error', content: 'Physical Science' },
        { type: 'error', content: 'Mathematics' },
        { type: 'error', content: 'Computer Science' },
        { type: 'error', content: 'Life Science' },
      ];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const ACalendar: FC = () => {

    const [data,setData]=useState<IEvent[]>([]);
    const [date,setDate]=useState<Dayjs>();
    const {styles} =useStyles();
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events" style={{marginLeft:-35,overflowX:'hidden',scrollbarWidth:'thin'}} onClick={()=>{setData(()=>listData)
        setDate(value)}}>

        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps['status']} text={'PS'} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  return(
    <>  
        <h1>Calendar</h1>
        <hr/>
        <div className={styles.sideBar}>

            <Calendar cellRender={cellRender} className={styles.calendar} fullscreen={false}/>;
            <div className={styles.container}>
                <h1 style={{color:'gray',marginLeft:30}}>Events</h1>
                {data.map(data=>(
                    <div key={data.content} style={{backgroundColor:'gray',height:100,textAlign:'center',color:'white',borderRadius:5,margin:10}}>
                        <h3 style={{marginTop:10}}>{data.type}</h3>
                        <p>{data.content}<br/>{date.year()+":"+date.month()+":"+date.day()}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
  ); 
  
  
};

export default ACalendar;