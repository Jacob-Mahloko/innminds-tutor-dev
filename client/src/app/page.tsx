'use client'

import TButton from '@/components/Buttons/TButton';
import useLogin from '@/utilis/common/login/helper';
import { Layout, Menu, theme } from 'antd';
import Image from 'next/image';
import { FC } from 'react';
import homeTutor from '../../public/homeTutor.webp';
import reading from '../../public/reading.jpg';
import highSchool from '../../public/highSchool.jpg';
import mentorship from '../../public/mentorship.jpg';
import { useStyles } from './style';
import university from '../../public/homeUniversity.jpg'

const { Header, Content, Footer } = Layout;
  

const Home:FC=()=>{

  const {items} =useLogin();

  const {styles}=useStyles();




  return (
    <Layout style={{height:'100vh'}}>
      <Header style={{ display: 'flex', alignItems: 'center'}}>
        
        <div className="demo-logo" ><h2 style={{color:'white'}}>Innminds Tutors</h2></div>
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          style={{ flex: 1, minWidth: 0,justifyContent:'right',marginRight:20}}
        />
      </Header>
      
      <Content style={{ padding: '0 40px' ,height:'100vh',overflowY:'auto',backgroundColor:'white'}}>
        <div className={styles.contentBox1}>
          <div className={styles.contentBoxText}>
            <h1>Unlock Your Potential with <br/> <span style={{color:'#00AF51'}}>Personalized Tutoring!</span></h1>
            <h3 style={{color:'GrayText'}}>Ready to unleash your brilliance? <br/>Let&#39;s get started!</h3>
            <TButton/>
          </div>
          <div>
            <Image src={homeTutor} alt="homeTutor" style={{height:'100%',width:'110%'}}/>
          </div>
        </div>
        
        <div className={styles.insight}> 
          
            <div className={styles.card}>
              <div ><Image src={highSchool} alt='highschool' style={{width:80,height:80,borderRadius:'60%'}}/></div>
              <div style={{marginLeft:8}}>
                <strong>High School</strong><br/>
                <span>Grade 10 - 12</span>
              </div>
            </div>
         
          <div className={styles.card}>
              <div ><Image src={university} alt='university' style={{width:80,height:80,borderRadius:'60%'}}/></div>
              <div style={{marginLeft:8}}>
                <strong>University</strong><br/>
                <span>Computer Science</span>
              </div>
          </div>
          
          <div className={styles.card}>
            <div ><Image src={mentorship} alt='mentorship' style={{width:80,height:80,borderRadius:'60%'}}/></div>
            <div style={{marginLeft:8}}>
              <strong>Mentorship</strong><br/>
              <span>Get Guidance into your career</span>
            </div>
          </div>

        </div> 
        
        <div className={styles.contentBox1}>
          <div>
            <Image src={reading} alt="homeTutor" style={{height:'80%',width:'80%'}}/>
          </div>
          <div className={styles.contentBoxText}>
            <h1>Why consider <br/> <span style={{color:'#00AF51'}}>Personalized Tutoring?</span></h1>
            <h2 style={{color:'GrayText'}}>1. Ready to unleash your brilliance? <br/>Let&#39;s get started!</h2>
            <h2 style={{color:'GrayText'}}>1. Ready to unleash your brilliance? <br/>Let&#39;s get started!</h2>
            <h2 style={{color:'GrayText'}}>1. Ready to unleash your brilliance? <br/>Let&#39;s get started!</h2>
            <TButton/>
          </div>
        </div>
      </Content>
      
      <Footer style={{ textAlign: 'center'}}>
        Innminds Tutors ©{new Date().getFullYear()} 
      </Footer>
    
    </Layout>
  );
}

export default Home;