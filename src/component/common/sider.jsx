import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React, { useContext, useState } from 'react'
import authContext from '../../context/auth.context'

const SiderLayout = () => {
  const auth=useContext(authContext)
    const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider trigger={null} collapsible collapsed={auth.state.isSiderCollapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
  )
}

export default SiderLayout
