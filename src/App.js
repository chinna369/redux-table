import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Users from './components/Users'
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;

const App = () => {
  const [selectedKey, setSelectedKey] = useState('1');
  const handleClick = (e) => {
    setSelectedKey(e.key); // Update the selected key based on clicked item
  };
  return (
    <Router>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]} onClick={handleClick} >
            <Menu.Item key="1">
              <a href="/">Home</a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="/dashboard">Dashboard</a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href="/users">Users</a>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
