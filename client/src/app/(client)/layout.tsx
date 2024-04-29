'use client'
import { Inter } from "next/font/google";
import { Layout, Menu, theme } from 'antd';
import useClientDashHelper from "@/utilis/client/dashboard/helper";
import { Suspense } from "react";

const { Header, Content, Footer } = Layout;

const inter = Inter({ subsets: ["latin"] });


export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const {items} =useClientDashHelper();

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    
  return (
    <html lang="en">
      <body className={inter.className}>
      <Layout style={{height:'100vh'}}>
        <Layout>
          <Header style={{ padding: 20,display:'flex', background: 'dark',alignItems:'center'}} >
            <div className="demo-logo" ><h2 style={{color:'white',width:300}}>Innminds Portal</h2></div>
            <Menu
              theme="dark"
              mode="horizontal"
              items={items}
              style={{ flex: 1, minWidth: 0,justifyContent:'right'}}
            />
          </Header>
          
          <Content style={{ padding: '0 40px' ,height:'100vh',overflowY:'auto',backgroundColor:'white'}}>
            <Suspense fallback={<h3>dashboard broke</h3>}>
              {children}
            </Suspense>
          </Content>
          
          <Footer style={{ textAlign: 'center'}}>
            Innminds Tutors ©{new Date().getFullYear()} 
          </Footer>
        </Layout>
    </Layout>
      </body>
    </html>
  );
}
