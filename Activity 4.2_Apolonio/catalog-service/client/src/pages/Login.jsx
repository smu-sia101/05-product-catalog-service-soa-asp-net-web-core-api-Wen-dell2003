import { useState, useContext, useEffect } from 'react';
import { Form, Input, Button, Card, Typography, Alert, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


const { Title } = Typography;


const Login = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();


    const { login, isAuthenticated, error, loading, clearError } = useContext(AuthContext);
    const [localError, setLocalError] = useState('');


    useEffect(() => {
        if (isAuthenticated) {
            navigate('/products');
        }
        if (error) {
            setLocalError(error);
        }
    }, [isAuthenticated, navigate, error]);


    const onFinish = async (values) => {
        setLocalError('');
        clearError();


        const success = await login(values);
        if (success) {
            navigate('/products');
        }
    };


    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                padding: '20px',
            }}
        >
            <Card
                style={{
                    width: '100%',
                    maxWidth: 400,
                    background: '#ffffff',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                    borderRadius: 16,
                    padding: '20px',
                }}
            >
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                    <Title level={2} style={{ textAlign: 'center', color: '#333', marginBottom: 0 }}>
                        Welcome Back
                    </Title>
                    <p style={{ textAlign: 'center', color: '#666' }}>
                        Please log in to your account
                    </p>


                    {localError && (
                        <Alert
                            message="Error"
                            description={localError}
                            type="error"
                            closable
                            showIcon
                            onClose={() => {
                                setLocalError('');
                                clearError();
                            }}
                            style={{ borderRadius: 8 }}
                        />
                    )}


                    <Form
                        form={form}
                        name="login"
                        layout="vertical"
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label={<span style={{ color: '#333' }}>Email</span>}
                            name="email"
                            rules={[
                                { required: true, message: 'Please input your email!' },
                                { type: 'email', message: 'Please enter a valid email address!' },
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined style={{ color: '#6a11cb' }} />}
                                placeholder="Enter your email"
                                size="large"
                                style={{ borderRadius: 8 }}
                            />
                        </Form.Item>


                        <Form.Item
                            label={<span style={{ color: '#333' }}>Password</span>}
                            name="password"
                            rules={[
                                { required: true, message: 'Please input your password!' },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined style={{ color: '#6a11cb' }} />}
                                placeholder="Enter your password"
                                size="large"
                                style={{ borderRadius: 8 }}
                            />
                        </Form.Item>


                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                block
                                loading={loading}
                                style={{
                                    background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                                    border: 'none',
                                    borderRadius: 8,
                                }}
                            >
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>


                    <div style={{ textAlign: 'center', color: '#666' }}>
                        Don’t have an account?{' '}
                        <Link to="/register" style={{ color: '#2575fc' }}>
                            Register now!
                        </Link>
                    </div>
                </Space>
            </Card>
        </div>
    );
};


export default Login;





