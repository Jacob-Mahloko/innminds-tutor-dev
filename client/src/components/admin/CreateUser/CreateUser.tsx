'use client'
import { useLoginActions } from "@/providers/authProvider";
import { Button, Col, Form, Input, Row, Select, message, type FormProps } from 'antd';
import { useRouter } from 'next/navigation';
import { ChildNode } from "postcss";
import { FC } from "react";
import { IUser } from "../../../../models/interface";
import { useStyles } from "./styles";

const options=[
    {label:'Maths',value:'mathematics'},
    {label:'Physical Sci',value:'physical science'},
    {label:'Life Sci',value:'life science'},
    {label:'Comp Sci',value:'computer science'}
]
interface props{
  children?:ChildNode,
  type:string
}

const CreateUser: FC<props>  = ({children,type}) =>{

    const {login} = useLoginActions();
    const {styles}=useStyles();
    const router = useRouter();
    const [form] = Form.useForm();

    const onFinish :FormProps<IUser>["onFinish"] =(values:IUser)=>{
      if(login){
        //login(values);
        console.log(values)
        form.resetFields();
      }
    }

    const onFinishFailed:FormProps<IUser>["onFinishFailed"] = (error) =>{
      console.log(error)
      message.error("failed")

    }

  
    return (
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
                    rules={[{ required: true, message: 'Please input your name!' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item<string>
                    label="Surname"
                    name="surname"
                    rules={[{ required: true, message: 'Please input your surname' }]}
                  >
                    <Input />
                  </Form.Item>
                  

                  <Form.Item<string>
                    label="email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item<string>
                    label="Phone"
                    name="cellphone"
                    rules={[{ required: true, message: 'Please input your cell number' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item<string>
                      label="Subjects"
                      name='subjects'
                      rules={[{ required: true, message: 'Please pick atleast one subject' }]}
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
                  

                  <Form.Item wrapperCol={{  span: 30 }} style={{}}>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',width:'100%'}}>
                      <Button type="primary" htmlType="submit" style={{width:100,marginLeft:10}}>Save</Button>
                    </div>
                  </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
    );
}

export default CreateUser;