'use client'
import { Button, Form, Input, Switch } from 'antd';
import { FC, use, useEffect, useState } from 'react';
import { useStyles } from './styles';
import profilepicture from '../../../../public/profile.jpg';
import Image from 'next/image';
import { useStudent } from '@/providers/studentProvider';
import TextArea from 'antd/es/input/TextArea';

const Profile:FC=()=>{
    const {styles}=useStyles();
    const [edit,setEdit]=useState(true);
    const {profile,getStudentProfile}=useStudent();
    useEffect(()=>{
        if(!profile){
            getStudentProfile();
        }
        console.log(profile)
    })

    const onFinish =(values:any)=>{
        console.log();
    }
    return(
        <div style={{padding:0,margin:0}}>
            <div className={styles.topContainer}>
                <Image className={styles.profileImage} src={profilepicture} alt='profile picture'/>
                <div><Button className={styles.buttonContainer} style={{backgroundColor:'green'}}>upload</Button><Button className={styles.buttonContainer} style={{backgroundColor:'gray'}}>remove</Button></div>
                <div className={styles.about}>
                    <h3 style={{textAlign:'center'}}>About</h3>
                    <p>
                        {profile?.about}
                    </p>
                </div>
            </div>
            <h2>Personal Details</h2> <Switch checkedChildren="Editing" unCheckedChildren="Click to Edit" onClick={()=>setEdit(()=>!edit)}/>
            <div className={styles.mainContainer}>
                <Form
                    layout="vertical"
                    
                    initialValues={{  // Setting initial values if needed
                        username: profile?.username,
                        email: profile?.email,
                        phone:profile?.phoneNumber,
                        surame: profile?.surname,
                        grade:profile?.grade,
                        name:profile?.name

                    }} 
                > 
                    <div className={styles.form}>
                        <div className={styles.formInput1}>
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
                                name="About"
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