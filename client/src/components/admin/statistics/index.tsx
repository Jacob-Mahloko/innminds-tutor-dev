'use client'
import { useAdmin } from '@/providers/adminProvider';
import { Card, Col, Row, Statistic } from 'antd';
import React, { Suspense, useEffect } from 'react';
import { useStyles } from './style';

const HeaderStats: React.FC = () => {
    const {styles}=useStyles();
    const {gradeStats,getGradeStat}=useAdmin();
    useEffect(()=>{
        if(!gradeStats){
            getGradeStat();
        }
    },[])

    console.log(gradeStats)
    return(
        <Suspense fallback={<h1>stats header broke</h1>}>
        <Row gutter={6}>
            <Col span={8}>
            <Card key="grade 10" className={styles.statCards}>
                <Statistic
                title="Number of students: Grade 10"
                value={gradeStats?.grade10}
                precision={0}
                valueStyle={{ color: 'black' }}
                />
            </Card>
            </Col>
            <Col span={8}>
            <Card key="dereg students" className={styles.statCards}>
                <Statistic
                title="Number of students: Grade 11"
                value={gradeStats?.grade11}
                precision={0}
                valueStyle={{ color: 'black' }}
                suffix=""
                />
            </Card>
            </Col>
            <Col  span={8}>
            <Card key="students" className={styles.statCards}>
                <Statistic
                title="Number of students: Grade 12"
                value={gradeStats?.grade12}
                precision={0}
                valueStyle={{ color: 'black' }}
                />
            </Card>
            </Col>
        </Row>
        </Suspense>
)};

export default HeaderStats;