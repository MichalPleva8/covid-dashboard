import React, { useState, useEffect } from 'react';
import { apiOrigin } from 'App';
import { PageHeader, Layout, Typography, Menu, Button, Drawer, Space, Row, Col, Form, Input, Select, DatePicker, InputNumber } from 'antd';
import {
  UserAddOutlined,
} from '@ant-design/icons';

import 'styles/App.css';

import Profile from 'pages/Profile';
import UploadPage from 'pages/UploadPage';
import Preview from 'pages/Preview';
import DashboardSider from 'components/DashboardSider';
import DashboardDrawer from 'components/DashboardDrawer';
import Login from './Login';

const { Title } = Typography;
const { Sider } = Layout;
const { Option } = Select;


function Dashboard() {
	const [isLogged, setIsLogged] = useState(null)

  const [page, setPage] = useState("preview");
  const [users, setUsers] = useState(null);
  const [year, setYear] = useState("2022");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getTests();
  }, [visible, isLogged])

  let getTests = () => {
    let url = `${apiOrigin}api/tests`;
    if (isLogged != null && isLogged != undefined) {
      url += `?username=${isLogged}`;
    }

    fetch(url)
      .then(raw => raw.json())
      .then(json => {
        setUsers(json);
      })
      .catch(error => console.error(error));
  }

  let deleteTest = (id) => {
    fetch(`${apiOrigin}api/tests/${id}`, {
      method: 'DELETE',
    })
      .then(raw => raw.json())
      .then(json => {
        console.log(json);
        getTests();
      })
      .catch(error => console.error(error));
  }

  let handleMenuChange = ({ key }) => {
    if (key != "logout") {
      setPage(key)
    }
  }

  let handleTabChange = (key) => {
    setYear(key);
  }

  let logout = () => {
    setIsLogged(null);
    sessionStorage.clear()
  }

  let closeDrawer = () => {
    setVisible(false);
  }

  let currentPage = (current) => {
    switch (current) {
      case 'preview':
        return <Preview users={users} deleteTest={deleteTest} handleTabChange={handleTabChange} />;

      case 'profile':
        return <Profile username="Michal Pleva" />;

      case 'upload':
        return <UploadPage />;
    
      default:
        return <p>No page</p>;
    }
  }

  return (
    <>
    {isLogged ? (
      <Layout hasSider>
        <DashboardSider handleMenuChange={handleMenuChange} logout={logout} />
        <DashboardDrawer isLogged={isLogged} closeDrawer={closeDrawer} setVisible={setVisible} visible={visible} />

        <Layout style={{ marginLeft: '200px', paddingInline: '25px', paddingBottom: '40px' }}>
          <PageHeader
            className="site-page-header"
            onBack={() => logout()}
            title={isLogged}
            subTitle="- Všetko"
            extra={[
              <Button key="addBtn" type='primary' onClick={() => setVisible(true)}>
                <UserAddOutlined />
                Pridať dáta
              </Button>,
            ]}
          />

          {currentPage(page)}
        </Layout>
      </Layout>
    ) : (
      <Login isAdmin={false} setIsLogged={setIsLogged} />
    )}
    </>
  );
}

export default Dashboard;
