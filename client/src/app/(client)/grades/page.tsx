'use client'
import { Progress, Table } from 'antd';
import {FC} from 'react';
import { useStyles } from './styles';
import type { ProgressProps } from 'antd';
import { comment } from 'postcss';

const twoColors: ProgressProps['strokeColor'] = {
    '0%': '#ff4747',
    '100%': '#47ff97',
  };

const subjects =
[
    {
        name:'Physical Science',
        Tests:[
            {name:'test 1',score:60,comment:"this is a temporary"},
            {name:'test 2',score:70,comment:"this is a temporary"},
            {name:'test 3',score:50,comment:"this is a temporary"},
            {name:'test 4',score:80,comment:"this is a temporary"},
            {name:'test 5',score:90,comment:"this is a temporary"},
        ]
    },
    {
        name:'Maths Science',
        Tests:[
            {name:'test 1',score:60,comment:'this is a temporary'},
            {name:'test 2',score:70,comment:'this is a temporary'},
            {name:'test 3',score:50,comment:'this is a temporary'},
            {name:'test 4',score:80,comment:'this is a temporary'},
            {name:'test 5',score:90,comment:'this is a temporary'},
        ]
    },
    {
        name:'Life Science',
        Tests:[
            {name:'test 1',score:60,comment:"this a temporary"},
            {name:'test 2',score:70,comment:"this a temporary"},
            {name:'test 3',score:50,comment:"this a temporary"},
            {name:'test 4',score:80,comment:"this a temporary"},
            {name:'test 5',score:90,comment:"this a temporary"},
        ]
    },
    {
        name:'Computer Science',
        Tests:[
            {name:'test 1',score:60,comment:"this is a temporary"},
            {name:'test 2',score:70,comment:"this is a temporary"},
            {name:'test 3',score:50,comment:"this is a temporary"},
            {name:'test 4',score:80,comment:"this is a temporary"},
            {name:'test 5',score:90,comment:"this is a temporary"},
        ]
    },

]

const columns=[
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title:'Score',
        dataIndex:'score',
        render:(score:number)=>(
            <Progress type="circle" percent={score} size={60} strokeWidth={10} strokeColor={twoColors} style={{alignContent:'center',alignItems:'center',justifyContent:'center'}}/>
        )
    },
    {
        title:'Comment',
        dataIndex:'comment'
    }
]

const Grades:FC=()=>{
    const {styles} =useStyles();
    return(
        <div >
            <h1 style={{color:'gray'}}>Grade Centre</h1>
            {subjects.map(data=>(
            <div key={data.name}  className={styles.container}>
                <h3>{data.name}</h3>
                <hr/>
                <Table dataSource={data.Tests} columns={columns} pagination={{pageSize:3}}/>
            </div>
            ))}
        </div>
    );
}

export default Grades;