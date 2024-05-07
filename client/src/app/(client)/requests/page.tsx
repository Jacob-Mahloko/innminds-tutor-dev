'use client'
import { Button, Col, Form, Input, Row, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import {FC, Suspense} from 'react';
import { useStyles } from './styles';
import { IRequest } from '../../../../models/interface';
import { RequestEnum } from '@/utilis/defaults/default';
import { useStudent } from '@/providers/studentProvider';

const options=[
    {key:1,label:'Wrong Grade Assigned',value:'wrongSubject'},
    {key:2,label:'Choose Different Tutor',value:'Choose Different Tutor'},
    {key:3,label:'Add Student to Class',value:'Add Student to Class'},
    {key:4,label:'Change Subject',value:'Change Subject'},
    {key:5,label:'Email  Update',value:'Email  Update'},
    {key:6,label:'Phone number update',value:'Phone number update'},
    {key:7,label:'Other',value:'Other'}
]

const Requests:FC=()=>{

    const [form] = Form.useForm();
    const {sendStudentRequest}=useStudent();

    const onFinish=(values:IRequest)=>{
        sendStudentRequest({...values,status:RequestEnum.Await});
        form.resetFields();
    }
    const onFinishFailed=()=>{}
    const {styles} =useStyles();
    return(
            <Suspense fallback={<h1>Requests</h1>}>
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
                            name='reason'
                            rules={[{ required: true, message: 'Please pick atleast one Reason' }]}
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
                            name="info"
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
            </Suspense>
    );
}

export default Requests;