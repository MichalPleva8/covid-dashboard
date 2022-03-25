import React from 'react'
import { Layout, Typography, Menu } from 'antd';
import {
  BarChartOutlined,
  UserOutlined,
  ImportOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import 'styles/App.css';

const { Title } = Typography;
const { Sider } = Layout;

function DashboardSider({ handleMenuChange, logout }) {
  return (
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 999,
          // background: '#fff'
        }}
      >
        <Title level={3} className='logo'>Health</Title>
        <Menu theme="dark" onClick={handleMenuChange} mode="inline" defaultSelectedKeys={['preview']}>
          <Menu.Item key="profile" icon={<UserOutlined />}>
            Účet
          </Menu.Item>
          <Menu.Item key="preview" icon={<BarChartOutlined />}>
            Prehľad
          </Menu.Item>
          <Menu.Item key="logout" onClick={() => logout()} icon={<ImportOutlined />}>
            Odhlasiť sa
          </Menu.Item>
        </Menu>
      </Sider>
  )
}

export default DashboardSider;