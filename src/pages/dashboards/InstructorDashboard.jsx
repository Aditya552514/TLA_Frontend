import React, { useState, useEffect, useRef } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  BookOutlined,
  FileTextOutlined,
  BarChartOutlined,
  CalendarOutlined,
  MessageOutlined,
  BellOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Button, Input, Layout, Menu, theme } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { decodeToken } from '../../utils/jwt';

const { Header, Sider, Content } = Layout;

const InstructorDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [username,setUsername]=useState()

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Menu items with navigation routes
  const menuItems = [
    { key: '/instructor_dashboard', icon: <UserOutlined />, label: 'Home' },
    { key: '/instructor_dashboard/courses', icon: <CalendarOutlined />, label: 'Courses' },//<VideoCameraOutlined />
    { key: '/instructor_dashboard/tasks', icon: <UploadOutlined />, label: 'Tasks' },
    { key: '/instructor_dashboard/rating', icon: <BarChartOutlined />, label: 'Ratings' },
  ];

  const handleMenuClick = (e) => {
    navigate(e.key);
  };

  // Close user dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  useEffect(()=>{
    const token=localStorage.getItem("authToken")

    if(!token) return setUsername("Instructor")
    
    try {
      const decoded=decodeToken(token)
      const email=decoded.email
      const name=email.split('@')[0]
      setUsername(name)
    } catch {
      setUsername('Instructor')
    }
  })


  const handleLogout=()=>{
    navigate('/')
    localStorage.clear()
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={240} collapsedWidth={70} trigger={null} collapsible collapsed={collapsed} style={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        height: '100vh',
        zIndex: 1000,
      }}>
        <div
          className="sidebar-title"
          style={{
            height: 64,
            margin: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: collapsed ? 16 : 20,
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #ff4d4f, #40a9ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
          }}
        >
          {collapsed ? 'TLA' : 'Terralogic Academy'}
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]} 
          onClick={handleMenuClick}
          items={menuItems}
        />

           <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            padding: "12px",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            background: "#001529", // keeps Ant Design dark theme
          }}
        >
          <Button
            danger
            type="primary"
            icon={<LogoutOutlined />}
            onClick={handleLogout}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: collapsed ? "center" : "flex-start",
              gap: collapsed ? 0 : 8,
            }}
          >
            {!collapsed && "Logout"}
          </Button>
        </div>


      </Sider>

      <Layout style={{ marginLeft: collapsed ? 80 : 250, transition: 'margin-left 0.2s' }}>
        <Header
          style={{
            padding: '0 24px',
            background: colorBgContainer,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: '16px', width: 48, height: 48 }}
            />
           

              <Input.Search
                placeholder="Search..."
                allowClear
                style={{
                  width: 260,
                  padding: 4,
                }}
              />
          </div> 

          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {/* <MessageOutlined style={{ fontSize: 20, cursor: 'pointer' }} />
            <BellOutlined style={{ fontSize: 20, cursor: 'pointer' }} /> */}
            <p style={{ fontSize: "18px", fontWeight: 600, margin: 0 }}>
              Welcome, {username} 🎉
            </p>

            <div className="dropdown" style={{ position: 'relative' }} ref={dropdownRef}>
              <UserOutlined
                style={{ fontSize: 22, cursor: 'pointer' }}
                onClick={() => setShowDropdown((prev) => !prev)}
              />
              {showDropdown && (
                <div
                  style={{
                    position: 'absolute',
                    top: 30,
                    right: 0,
                    background: '#fff',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    borderRadius: 6,
                    overflow: 'hidden',
                    zIndex: 1000,
                    minWidth: 120,
                  }}
                >
                  <div
                    style={{ padding: '10px 16px', cursor: 'pointer', borderBottom: '1px solid #eee' }}
                    onClick={() => {
                      alert('Go to Settings');
                      setShowDropdown(false);
                    }}
                  >
                    Settings
                  </div>
                  <div
                    style={{ padding: '10px 16px', cursor: 'pointer' }}
                    onClick={() => {
                      alert('Logged out');
                      handleLogout
                      setShowDropdown(false);
                    }}
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          </div>
        </Header>

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default InstructorDashboard;