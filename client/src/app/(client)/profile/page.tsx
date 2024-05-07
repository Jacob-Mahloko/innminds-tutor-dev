'use client'
import { Button, Form, Input, Switch, Upload } from 'antd';
import { FC, use, useEffect, useState } from 'react';
import { useStyles } from './styles';
import profilepicture from '../../../../public/profile.jpg';
import Image from 'next/image';
import { useStudent } from '@/providers/studentProvider';
import TextArea from 'antd/es/input/TextArea';
import { IStudent } from '../../../../models/interface';
import { UploadOutlined } from '@ant-design/icons';

const Profile:FC=()=>{
    const {styles}=useStyles();
    const [edit,setEdit]=useState(true);
    const {profile,getStudentProfile,editProfile}=useStudent();
    const [form] = Form.useForm();
    useEffect(()=>{
        if(!profile){
            getStudentProfile();
        }
    },[])

    if(!profile){
        getStudentProfile();
    }

    useEffect(()=>{
        form.setFieldsValue({ 
            username: profile?.username,
            email: profile?.email,
            phone:profile?.phoneNumber,
            surname: profile?.surname,
            grade:profile?.grade,
            name:profile?.name,
            about:profile?.about
        })
    },[profile])

    const onFinish =(values:IStudent)=>{
        //console.log({...values,file:values.imageUrl.file.originFileObj})
        editProfile({...profile,...values,file:values.imageUrl.file.originFileObj});  
    }
    
    return(
        <div style={{padding:0,margin:0}}>
            <div className={styles.topContainer}>
                <Image className={styles.profileImage} src={profile?.imageString==''||profile?.imageString==null?profilepicture:`data:image/png;base64,${profile?.imageString}`} alt='profile picture' height={150} width={150}/>
                <div className={styles.about}>
                    <h3 style={{textAlign:'center',fontSize:22}}>About</h3>
                    <p style={{textAlign:'center',fontSize:18}}>
                        {profile?.about}
                    </p>
                </div>
            </div>
            <h2>Personal Details</h2> <Switch checkedChildren="Editing" unCheckedChildren="Click to Edit" onClick={()=>setEdit(()=>!edit)}/>
            <div className={styles.mainContainer}>
                <Form
                    layout="vertical"
                    form={form}
                    initialValues={{  // Setting initial values if needed
                        username: profile?.username,
                        email: profile?.email,
                        phone:profile?.phoneNumber,
                        surname: profile?.surname,
                        grade:profile?.grade,
                        name:profile?.name,
                        about:profile?.about
                    }} 
                    onFinish={onFinish}
                > 

                    <div className={styles.form}>
                        <div className={styles.formInput1}>
                            <Form.Item<IStudent> 
                            label="Upload Image:" 
                            name='imageUrl'
                            hidden={edit}
                            >
                            <Upload style={{marginLeft:10}} disabled={edit}>
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
                            </Form.Item>
                            <Form.Item 
                                label="Username"
                                name="username"
                            >
                                <Input placeholder="Username" disabled={edit} />
                            </Form.Item>
                            <Form.Item 
                                label="Email"
                                name='email'
                            >
                                <Input placeholder="Email" disabled={edit} />
                            </Form.Item>
                            <Form.Item 
                                label="Grade"
                                name='grade'
                            >
                                <Input placeholder="grade" disabled={edit} />
                            </Form.Item>
                        </div>
                        <div className={styles.formInput2}>
                            <Form.Item 
                                label="Phone"
                                name='phone'
                            >
                                <Input placeholder="000 000 0000" disabled={edit} />
                            </Form.Item>
                            <Form.Item 
                                label="Name"
                                name="name"    
                            >
                                <Input placeholder="name" disabled={edit} />
                            </Form.Item>
                            <Form.Item 
                                label="Surname"
                                name="surname"    
                            >
                                <Input placeholder="surname" disabled={edit} />
                            </Form.Item>
                            <Form.Item 
                                label="About"
                                name="about"
                                hidden={edit}    
                            >
                                <TextArea placeholder="about you"  />
                            </Form.Item>
                            <Form.Item 
                                hidden={edit}
                            >
                                <Button type='primary' htmlType='submit'>Save Changes</Button>
                            </Form.Item>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Profile;