'use client'
import HButton from "@/components/Buttons/Home";
import { useAdminActions, useAdminState } from "@/providers/adminProvider";
import { validateEscapeScequence, validatePhoneNumber } from "@/utilis/validator/validator";
import { Button, Col, DatePicker, Form, Input, Row, Select, message, type FormProps } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense, useState } from "react";
import { IApplication, ILesson } from "../../../../models/interface";
import { useStyles } from "./styles";
import { useTutor } from "@/providers/tutorProvider";
import dayjs  from 'dayjs';

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

interface Lesson{
 topic:string;
 notesUrl:string;
 homeworkUrl:string;
 videoUrl:string;
 grade:string;
 subject:string;
 Date:any;
}

const AddLesson: React.FC  = () =>{
  
    const {styles}=useStyles();
    const router = useRouter();
    const [form] = Form.useForm();

    const state=useAdminState();
    const {createLesson}=useTutor();
   

    const onFinish :FormProps<Lesson>["onFinish"] =(values:Lesson)=>{
        console.log({...values,dueDate:dayjs(values.Date).format('YYYY-MM-DD')})
        createLesson(values.subject,
                        values.grade,
                        {
                            notesUrl:values.notesUrl,
                            homeworkUrl:values.homeworkUrl,
                            videoUrl:values.videoUrl,
                            topic:values.topic,
                            dueDate:dayjs(values.Date).format('YYYY-MM-DD')
                        }
                    )
        form.resetFields();
    }

    const onFinishFailed:FormProps<Lesson>["onFinishFailed"] = (error) =>{
      console.log(error)
      message.error("failed")

    }

    return (
      <Suspense fallback={<h1>Registration Failed</h1>}>
        <div className={styles.container}>
           
              <Row className={styles.rowCss}>
                <Col className={styles.loginImageContainer}></Col>
                <Col className={styles.loginForm}>
                <h1 className={styles.loginFormH1}>Create Lesson</h1>

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
                      label="Topic"
                      name="topic"
                      rules={[{ required: true, message: 'Please input your topic!' },{validator:validateEscapeScequence}]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item<string>
                      label="Notes Url"
                      name="notesUrl"
                      rules={[
                          { required: true, message: 'Please input your notes url' },{validator:validateEscapeScequence}
                        ]}
                    >
                      <Input />
                    </Form.Item>
                    

                    <Form.Item<string>
                      label="Video Url"
                      name="videoUrl"
                      rules={[
                        { required: true, message: 'Please input your video url' },
                        {validator:validateEscapeScequence}  
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item<string>
                      label="Homework Url"
                      name="homeworkUrl"
                      rules={[{ required: true, message: 'Please input your homework url' },{validator:validateEscapeScequence}]}
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
                      label="Subject"
                      name='subject'
                      rules={[{ required: true, message: 'Please pick atleast one subject' },{validator:validateEscapeScequence}]}
                      style={{alignContent:'right'}}
                     
                  >
                      <Select
                       
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        options={options}
                      />
                  </Form.Item>
                  <Form.Item<string>
                      label="Due Date"
                      name="Date"
                      rules={[
                        { required: true, message: 'Please pick due date' },
                      ]}
                    >
                      <DatePicker format="YYYY-MM-DD"/>
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

export default AddLesson;