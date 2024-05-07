'use client'
import HButton from "@/components/Buttons/Home";
import { useAdminActions } from "@/providers/adminProvider";
import { validateEscapeScequence, validatePhoneNumber } from "@/utilis/validator/validator";
import { Button, Col, Form, Input, Row, Select, message, type FormProps } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense } from "react";
import { IApplication } from "../../../../models/interface";
import { useStyles } from "./styles";

const options=[
  {label:"Physical Science",value:"Physical Science"},
  {label:"Mathematics",value:"Mathematics"},
  {label:"Life Science",value:"Life Science"}
]

const grade=[ 
  {label:'Grade 12',value:'12'},
  {label:'Grade 11',value:'11'},
  {label:'Grade 10',value:'10'},
]

const GetATutor: React.FC  = () =>{
  
    const {styles}=useStyles();
    const router = useRouter();
    const [form] = Form.useForm();
    const {sendApplication}=useAdminActions();
    const type =useSearchParams().get('type');

    const onFinish :FormProps<IApplication>["onFinish"] =(values:any)=>{
      if(sendApplication){
        sendApplication({...values,type:type,subjectIds:values.subjectIds.join(',')})
        form.resetFields();
      }
    }

    const onFinishFailed:FormProps<IApplication>["onFinishFailed"] = (error) =>{
      console.log(error)
      message.error("failed")

    }
   
    return (
      <Suspense fallback={<h1>Registration Failed</h1>}>
        <div className={styles.container}>
           
              <Row className={styles.rowCss}>
                <Col className={styles.loginImageContainer}></Col>
                <Col className={styles.loginForm}>
                <h1 className={styles.loginFormH1}>Register Below</h1>

                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ isLibrarian:false,remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >     
                           
                    <Form.Item<string>
                      label="Name"
                      name="firstname"
                      rules={[{ required: true, message: 'Please input your name!' },{validator:validateEscapeScequence}]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item<string>
                      label="Surname"
                      name="lastname"
                      rules={[
                          { required: true, message: 'Please input your surname' },{validator:validateEscapeScequence}
                        ]}
                    >
                      <Input />
                    </Form.Item>
                    

                    <Form.Item<string>
                      label="email"
                      name="email"
                      rules={[
                        {type: 'email',message: 'Please enter a valid email!'},
                        { required: true, message: 'Please input your email' },
                        {validator:validateEscapeScequence}  
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item<string>
                      label="Phone"
                      name="phoneNumber"
                      rules={[{ required: true, message: 'Please input your cell number' },{validator:validatePhoneNumber},{validator:validateEscapeScequence}]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item<string>
                      label="Grade"
                      name='grade'
                      rules={[{ required: true, message: 'Please pick a grade' },{validator:validateEscapeScequence}]}
                      style={{alignContent:'right'}}
                  >
                      <Select
                        
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Please select Grade"
                        options={grade}
                      />
                  </Form.Item>

                    <Form.Item<string>
                      label="Subjects"
                      name='subjectIds'
                      rules={[{ required: true, message: 'Please pick atleast one subject' },{validator:validateEscapeScequence}]}
                      style={{alignContent:'right'}}
                     
                  >
                      <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        options={options}
                      />
                  </Form.Item>
    
                    <Form.Item wrapperCol={{ span: 24 }} style={{}}>
                      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',width:'100%'}}>
                        <HButton/>
                        <Button type="primary" htmlType="submit" style={{width:150,marginLeft:10}}>Send</Button>
                      </div>
                    </Form.Item>
                </Form>
                </Col>
              </Row>
            
        </div>
        </Suspense>
    );
}

export default GetATutor;