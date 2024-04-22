'use client'
import { useLoginActions } from "@/providers/authProvider";
import { Button, Card, Checkbox, Form, Input, message, type FormProps } from 'antd';
import { useRouter } from 'next/navigation';
import React from "react";
import { ILogin } from "../../../models/interface";
import { useStyles } from "./style";


const Login: React.FC  = () =>{

    const {login} = useLoginActions();
    const {styles, cx}=useStyles();
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
                <h1 className={styles.loginFormH1}>Hi,<br/>Welcome back</h1>

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
                      label="Username"
                      name="userNameOrEmailAddress"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item<string>
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item<string>
                      name="remember"
                      valuePropName="checked"
                      wrapperCol={{ span: 30 }}
                    >
                      <div className={styles.RememberMeStyle}>
                        <Checkbox defaultChecked={true}>Remember me</Checkbox>
                        <p className={styles.notregistered} onClick={()=> router.push('/getTutor')}>Not Register?</p>
                      </div>
                    </Form.Item>
                    
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                      <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </Card>
        
        </div>
    );
}

export default Login;