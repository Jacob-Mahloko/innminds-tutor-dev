'use client'
import { Button, Form, Input } from 'antd';
import { FC } from 'react';
import { useStyles } from './styles';

const Profile:FC=()=>{
    const {styles}=useStyles();
    return(
        <div style={{padding:0,margin:0}}>
            <div className={styles.topContainer}>
                <div className={styles.profileImage}/>
                <div><Button className={styles.buttonContainer} style={{backgroundColor:'green'}}>upload</Button><Button className={styles.buttonContainer} style={{backgroundColor:'gray'}}>remove</Button></div>
                <div className={styles.about}>
                    <h3 style={{textAlign:'center'}}>About</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est aperiam asperiores assumenda sed, velit vel 
                        maiores corporis enim voluptatum ratione, sit suscipit aliquid delectus rerum provident, non atque ipsa cumque!
                    </p>
                </div>
            </div>
            <h2>Personal Details</h2>
            <div className={styles.mainContainer}>
                <Form
                    layout="vertical"
                    
                    initialValues={{  // Setting initial values if needed
                        username: 'Jake707',
                        email: 'johndoe@example.com',
                        phone:'012 012 4441',
                        fUllName:'Jacob Mahloko',
                        grade:12

                    }} 
                > 
                    <div className={styles.form}>
                        <div className={styles.formInput1}>
                            <Form.Item 
                                label="Username"
                                name="username"
                            >
                                <Input placeholder="Username" disabled />
                            </Form.Item>
                            <Form.Item 
                                label="Email"
                                name='email'
                            >
                                <Input placeholder="Email" disabled />
                            </Form.Item>
                            <Form.Item 
                                label="Grade"
                                name='grade'
                            >
                                <Input placeholder="grade" disabled />
                            </Form.Item>
                        </div>
                        <div className={styles.formInput2}>
                            <Form.Item 
                                label="Phone"
                                name='phone'
                            >
                                <Input placeholder="000 000 0000" disabled />
                            </Form.Item>
                            <Form.Item 
                                label="FullName"
                                name="fUllName"    
                            >
                                <Input placeholder="full name" disabled />
                            </Form.Item>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Profile;