'use client'
import { useLoginActions } from "@/providers/authProvider";
import { Button, Card, Form, Input, message, type FormProps } from 'antd';
import { useRouter } from 'next/navigation';
import React from "react";
import { ILogin } from "../../../../models/interface";
import { useStyles } from "./styles";
import HButton from "@/components/Buttons/Home";



const GetATutor: React.FC  = () =>{

    const {login} = useLoginActions();
    const {styles}=useStyles();
    const router = useRouter();
    const [form] = Form.useForm();

    const onFinish :FormProps<ILogin>["onFinish"] =(values:ILogin)=>{
      if(login){
        //login(values);
        console.log(values)
        form.resetFields();
      }
    }

    const onFinishFailed:FormProps<ILogin>["onFinishFailed"] = (error) =>{
      console.log(error)
      message.error("failed")

    }

   
    return (
        <div className={styles.container}>
       
            <Card className={styles.loginForm}>
                <h1 className={styles.loginFormH1}>Hi,<br/>Register Below</h1>

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
    
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{}}>
                      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',width:'100%'}}>
                        <HButton/>
                        <Button type="primary" htmlType="submit" style={{width:150,marginLeft:10}}>Send</Button>
                      </div>
                    </Form.Item>
                </Form>
            </Card>
        
        </div>
    );
}

export default GetATutor;