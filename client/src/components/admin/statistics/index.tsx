'use client'
import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import { useStyles } from './style';

const HeaderStats: React.FC = () => {
    const {styles}=useStyles();
    return(
        <Row gutter={6}>
            <Col span={8}>
            <Card key="new students" className={styles.statCards}>
                <Statistic
                title="New Students"
                value={11}
                precision={0}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                />
            </Card>
            </Col>
            <Col span={8}>
            <Card key="dereg students" className={styles.statCards}>
                <Statistic
                title="Deregistered Students"
                value={3}
                precision={0}
                valueStyle={{ color: '#cf1322' }}
                prefix={<ArrowDownOutlined />}
                suffix=""
                />
            </Card>
            </Col>
            <Col  span={8}>
            <Card key="students" className={styles.statCards}>
                <Statistic
                title="Number of students"
                value={23}
                precision={0}
                valueStyle={{ color: 'black' }}
                />
            </Card>
            </Col>
        </Row>
)};

export default HeaderStats;