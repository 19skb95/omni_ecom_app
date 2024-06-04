import { Button, Layout } from 'antd'
import React from 'react'
import SiderLayout from './sider'
import { Content, Footer } from 'antd/es/layout/layout'
import AuthState from '../../context/auth.state'
import HeaderLayout from './header'

const MainLayout = () => {
  return (
    <AuthState>
      <Layout>
        <SiderLayout />
        <Layout>
          <HeaderLayout />
          <Content
            style={{
              margin: '10px 8px',
              padding: 10,
              minHeight: 280,
              background: '#e9edf0',
              borderRadius: '2px',
            }}
          >

          </Content>
          <Footer style={{ textAlign: 'center', }} >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </AuthState>
  )
}

export default MainLayout
