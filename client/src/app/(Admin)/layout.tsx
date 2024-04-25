'use client'
import { Inter } from "next/font/google";
import { Layout, Menu, theme } from 'antd';
import useDashHelper from "@/utilis/admin/dashboard/helper";
import { Suspense } from "react";

const { Header, Content, Footer } = Layout;

const inter = Inter({ subsets: ["latin"] });


export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const {items} =useDashHelper();

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    
  return (
    <html lang="en">
      <body className={inter.className}>
      <Layout style={{height:'100vh'}}>
      <Header style={{ display: 'flex', alignItems: 'center'}}>
        <div className="demo-logo" ><h2 style={{color:'white'}}>Innminds Admin</h2></div>
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          style={{ flex: 1, minWidth: 0,justifyContent:'right',marginRight:20}}
        />
      </Header>
      
      <Content style={{ padding: '0 40px' ,height:'100vh',overflowY:'auto',backgroundColor:'white'}}>
        <Suspense fallback={<h3>admin dashboard broke</h3>}>
          {children}
        </Suspense>
      </Content>
      
      <Footer style={{ textAlign: 'center'}}>
        Innminds Tutors ©{new Date().getFullYear()} 
      </Footer>
    
    </Layout>
      </body>
    </html>
  );
}
