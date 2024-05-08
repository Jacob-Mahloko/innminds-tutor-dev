'use client'
import { useAdminActions, useAdminState } from '@/providers/adminProvider';
import { validateEscapeScequence, validatePhoneNumber } from "@/utilis/validator/validator";
import { Button, Col, Form, Input, Row, Select, message, type FormProps } from 'antd';
import { useRouter } from 'next/navigation';
import { FC, Suspense } from "react";
import { IStudent } from "../../../../models/interface";
import { useStyles } from "./styles";

const grade=[ 
  {label:'Grade 12',value:'12'},
  {label:'Grade 11',value:'11'},
  {label:'Grade 10',value:'10'},
]

interface props{
  children?:Node,
  type:string
}

const CreateUser: FC<props>  = ({children,type}) =>{

    const {registerStudent,getSubjectByGrade,registerTutor}=useAdminActions();
    const {gradeSubjects} =useAdminState();
    const {styles}=useStyles();
    const router = useRouter();
    const [form] = Form.useForm();
    

    const onFinish :FormProps<IStudent>["onFinish"] =(values:IStudent)=>{
      if(type=='Student'){
        if(registerStudent){
          registerStudent(values);
          form.resetFields();
        }
      }else{
        if(registerTutor){
          registerTutor({...values})
          form.resetFields();
        }
      }
      
    }

    const onFinishFailed:FormProps<IStudent>["onFinishFailed"] = (error) =>{
      console.log(error)
      message.error("failed")

    }

    const getSubjects= (value:any)=>{
      getSubjectByGrade(value); 
    }

    return (
        <Suspense fallback={<h1>create broke</h1>}>
          <div className={styles.container}>
            <Row className={styles.rowCss}>
              <Col className={styles.loginImageContainer}></Col>
              <Col className={styles.loginForm}>
                <h1>{type} Registration </h1>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    style={{maxWidth:800}}
                    initialValues={{ isLibrarian:false,remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >     
                          
                    <Form.Item<string>
                      label="Name"
                      name="name"
                      rules={[{ required: true, message: 'Please input your name!' },{validator:validateEscapeScequence}]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item<string>
                      label="Surname"
                      name="surname"
                      rules={[{ required: true, message: 'Please input your surname' },{validator:validateEscapeScequence}]}
                    >
                      <Input />
                    </Form.Item>
                    

                    <Form.Item<string>
                      label="email"
                      name="email"
                      rules={[{ required: true, message: 'Please input your email' },{type:'email',message:'Please input correct email'},{validator:validateEscapeScequence}]}
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
                          onChange={getSubjects}
                        />
                    </Form.Item>

                    <Form.Item<string>
                        label="Subjects"
                        name='subjectIds'
                        rules={[{ required: true, message: 'Please pick atleast one subject' }]}
                        style={{alignContent:'right'}}
                    >
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: '100%' }}
                          placeholder="Please select"
                          options={gradeSubjects?.map((data)=>({label:data?.name,value:data?.id}))}
                        />
                    </Form.Item>
                    

                    <Form.Item wrapperCol={{  span: 30 }} style={{}}>
                      <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',width:'100%'}}>
                        <Button type="primary" htmlType="submit" style={{width:100,marginLeft:10}}>Save</Button>
                      </div>
                    </Form.Item>
                </Form>
              </Col>
            </Row>
          </div>
        </Suspense>
    );
}

export default CreateUser;