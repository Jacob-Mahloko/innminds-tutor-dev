'use client'

import TButton from '@/components/Buttons/TButton';
import useLogin from '@/utilis/common/login/helper';
import { Layout, Menu, theme } from 'antd';
import Image from 'next/image';
import { FC, Suspense } from 'react';
import homeTutor from '../../public/homeTutor.png';
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
    <Suspense fallback={<h1>Application Failed</h1>}>
    <Layout style={{height:'100vh'}}>
      <Header style={{ display: 'flex', alignItems: 'center',backgroundColor:'white',color:'gray',fontSize:24}}>
        
        <div className="demo-logo" ><h2 style={{color:'orange',fontSize:30}}>Innminds Tutors</h2></div>
        <Menu
         
          mode="horizontal"
          items={items}
          style={{ flex: 1, minWidth: 0,justifyContent:'right',color:'black',marginTop:'3px',marginRight:18,backgroundColor:'00AF51',fontWeight:'bold'}}
        />
        
      </Header>
      <Suspense>
      <Content style={{ padding: '0 40px' ,height:'100vh',overflowY:'auto',backgroundColor:'white'}}>
        <div className={styles.contentBox1}>
          <div>
            <Image src={homeTutor} alt="homeTutor" style={{height:'80%',width:'80%',marginTop:50,borderRadius:'5%',marginLeft:0,marginBottom:100}}/>
          </div>
          <div className={styles.contentBoxText}>
            <h1>Unlock Your Potential with <br/> <span style={{color:'#00AF51'}}>Personalized Tutoring!</span></h1>
            <h3 style={{fontSize:18,color:'black'}}>Struggling with a certain subject ? <br/> Trying to <b style={{color:'#00AF51'}}>Ace</b> that test ?<br/><br/>Join Innminds Tutors</h3>
            <TButton/>
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
            <h2 style={{color:'GrayText'}}>1. Ready to unleash your brilliance?</h2>
            <h2 style={{color:'GrayText'}}>2. Self pace learning<br/>Work at you preferred time!</h2>
            <h2 style={{color:'GrayText'}}>3. Come Join us to Academic Success <br/>Let&#39;s get started!</h2>
            <TButton/>
          </div>
        </div>
      </Content>
      </Suspense>
      <Footer style={{ textAlign: 'center'}}>
        Innminds Tutors ©{new Date().getFullYear()} 
      </Footer>
    
    </Layout>
    </Suspense>
  );
}

export default Home;