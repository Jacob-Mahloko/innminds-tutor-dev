'use client'
import {FC} from 'react';

const schedule={
    week:
    [
        {name:'Topic 1 homework',duedate:'2024-12-05'},
        {name:'Topic 2 homework',duedate:'2024-12-05'},
        {name:'Topic 3 homework',duedate:'2024-12-05'},
        {name:'Topic 4 homework',duedate:'2024-12-05'},
        {name:'Topic 5 homework',duedate:'2024-12-05'},
    ]
}

const Schedule:FC=()=>{
    return(
        <div>
            <h1 style={{color:'gray'}}>Schedule</h1>
            <hr/>
            <div>
                <h2>This Week</h2>
                {schedule.week.map(data=>(
                    <div key={data.name} style={{backgroundColor:'green',height:100,width:'100%',margin:5,borderRadius:5,textAlign:'center',alignContent:'center',color:'white',fontSize:18}}>{data.name}</div>
                ))}
                
            </div>

            <div>
                <h2>Upcoming ...</h2>
                {schedule.week.map(data=>(
                    <div key={data.name}  style={{backgroundColor:'lightblue',height:100,width:'100%',margin:5,borderRadius:5,textAlign:'center',alignContent:'center',color:'white',fontSize:18}}>{data.name}</div>
                ))}
            </div>
        </div>
        
    );
}

export default Schedule;