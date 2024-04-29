'use client'
import { Button, Col, Form, Input, Row, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import {FC} from 'react';
import { useStyles } from './styles';

const options=[
    {label:'Wrong Grade Assigned',value:'wrongSubject'},
    {label:'Choose Different Tutor',value:'physical science'},
    {label:'Add Student to Class',value:'life science'},
    {label:'Change Subject',value:'computer science'},
    {label:'Email  Update',value:''},
    {label:'Phone number update',value:''},
    {label:'Other',value:''}
]

const Requests:FC=()=>{

    const [form] = Form.useForm();
     
    const onFinish=()=>{}
    const onFinishFailed=()=>{}
    const {styles} =useStyles();
    return(
            <Row className={styles.container}>
                <Col ><div className={styles.imageContainer}></div></Col>
                <Col className={styles.content}>
                    <h1 style={{textAlign:'left',width:'100%',marginLeft:20}}>Log Request</h1>
                    <hr/>
                    <div >
                    <Form
                        layout='vertical'
                        form={form}
                        name="basic"
                        labelCol={{ span: 30 }}
                        className={styles.loginFrom}
                        initialValues={{ isLibrarian:false,remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >     
                        
                        <Form.Item<string>
                            label="Select service request"
                            name='seriveRequest'
                            rules={[{ required: true, message: 'Please pick atleast one subject' }]}
                            style={{alignContent:'left'}}
                            
                        >
                            <Select
                                
                                allowClear
                                style={{ width: '100%' }}
                                placeholder="Please select"
                                options={options}
                                className={styles.inputForm}
                            />
                        </Form.Item>
                        <Form.Item<string>
                            label="Additonal Information"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                            
                        >
                            <TextArea className={styles.inputForm}/>
                        </Form.Item>
                        
                        <Form.Item wrapperCol={{  span: 30 }} style={{}}>
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',width:'100%'}}>
                            <Button type="primary" htmlType="submit" style={{width:100,marginLeft:10}}>Save</Button>
                            </div>
                        </Form.Item>
                    </Form>
                    </div>
                </Col>
            </Row>
        
    );
}

export default Requests;