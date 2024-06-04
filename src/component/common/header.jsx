import { Button } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React, { useContext } from 'react'
import authContext from '../../context/auth.context'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

const HeaderLayout = () => {
    const auth=useContext(authContext)
  return (
    <Header style={{ padding: 0,}}>
    <Button
      type="text"
      icon={true ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={() => auth.setState({isSiderCollapsed:!auth.state.isSiderCollapsed})}
      style={{
        fontSize: '16px',
        width: 64,
        height: 64,
        color:"#f5fcfa"
      }}
    />
  </Header>
  )
}

export default HeaderLayout
