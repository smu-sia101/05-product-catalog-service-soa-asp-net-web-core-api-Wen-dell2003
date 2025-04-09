import { useContext } from 'react';
import { Layout, Menu, Button, Space, Typography } from 'antd';
import {
    ShoppingCartOutlined,
    UserOutlined,
    LogoutOutlined,
    LoginOutlined,
    AppstoreOutlined,
    ProductOutlined
} from '@ant-design/icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


const { Header } = Layout;
const { Title } = Typography;


const Navbar = () => {
    const { isAuthenticated, logout, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const handleLogout = () => {
        logout();
        navigate('/login');
    };


    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 30px',
                background: '#f9f9f9',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                borderRadius: '0 0 12px 12px',
                height: '64px',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Space>
                    <ProductOutlined style={{ fontSize: '26px', color: '#1677ff' }} /> {/* Updated icon */}
                    <Title level={3} style={{ margin: 0 }}>
                        <Link
                            to="/"
                            style={{
                                color: '#1677ff',
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontFamily: 'Segoe UI, sans-serif',
                            }}
                        >
                            Product Catalog Service
                        </Link>
                    </Title>
                </Space>
            </div>


            <Menu
                mode="horizontal"
                selectedKeys={[location.pathname]}
                style={{
                    border: 'none',
                    background: 'transparent',
                    fontWeight: 500,
                    fontSize: '16px',
                    fontFamily: 'Segoe UI, sans-serif',
                }}
                items={[
                    {
                        key: '/',
                        icon: <AppstoreOutlined />,
                        label: <Link to="/">Home</Link>,
                    },
                    {
                        key: '/products',
                        icon: <ShoppingCartOutlined />,
                        label: <Link to="/products">Products</Link>,
                    },
                    ...(isAuthenticated
                        ? [
                            {
                                key: '/profile',
                                icon: <UserOutlined />,
                                label: (
                                    <Link to="/profile">
                                        {user?.username || 'Profile'}
                                    </Link>
                                ),
                            },
                            {
                                key: 'logout',
                                icon: <LogoutOutlined />,
                                label: (
                                    <span onClick={handleLogout} style={{ cursor: 'pointer' }}>
                                        Logout
                                    </span>
                                ),
                            },
                        ]
                        : [
                            {
                                key: '/login',
                                icon: <LoginOutlined />,
                                label: <Link to="/login">Login</Link>,
                            },
                            {
                                key: '/register',
                                label: (
                                    <Link to="/register">
                                        <Button
                                            type="primary"
                                            style={{
                                                borderRadius: '20px',
                                                backgroundColor: '#1677ff',
                                                border: 'none',
                                                padding: '0 16px',
                                                fontWeight: 500,
                                            }}
                                        >
                                            Register
                                        </Button>
                                    </Link>
                                ),
                            },
                        ]),
                ]}
            />
        </Header>
    );
};


export default Navbar;



