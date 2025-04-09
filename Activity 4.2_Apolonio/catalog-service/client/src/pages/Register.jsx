import { useState, useContext, useEffect } from 'react';
import { Form, Input, Button, Card, Typography, Alert, Space } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


const { Title } = Typography;


const Register = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const { register, isAuthenticated, error, loading, clearError } = useContext(AuthContext);
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
        if (values.password !== values.confirmPassword) {
            setLocalError('Passwords do not match');
            return;
        }
        const formData = {
            username: values.username,
            email: values.email,
            password: values.password
        };
        const success = await register(formData);
        if (success) {
            navigate('/login');
        }
    };


    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh',
            backgroundColor: '#f9f9f9'
        }}>
            <Card
                style={{
                    width: 400,
                    border: '1px solid #d9d9d9',
                    borderRadius: '8px',
                    padding: '20px'
                }}
            >
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                    <div style={{ textAlign: 'center' }}>
                        <Title level={3} style={{ marginBottom: '10px' }}>Register</Title>
                    </div>

                    {localError && (
                        <Alert
                            message="Error"
                            description={localError}
                            type="error"
                            closable
                            onClose={() => {
                                setLocalError('');
                                clearError();
                            }}
                            style={{ marginBottom: '15px' }}
                        />
                    )}

                    <Form
                        form={form}
                        name="register"
                        layout="vertical"
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Username"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                                {
                                    type: 'email',
                                    message: 'Please enter a valid email address!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<MailOutlined />}
                                placeholder="Email"
                                size="large"
                            />
                        </Form.Item>


                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    min: 6,
                                    message: 'Password must be at least 6 characters!',
                                },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder="Password"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirmPassword"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The two passwords do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder="Confirm Password"
                                size="large"
                            />
                        </Form.Item>


                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                block
                                loading={loading}
                                style={{ borderRadius: '4px' }}
                            >
                                Register
                            </Button>
                        </Form.Item>
                    </Form>

                    <div style={{ textAlign: 'center', fontSize: '14px' }}>
                        Already have an account?{' '}
                        <Link to="/login">Login now!</Link>
                    </div>
                </Space>
            </Card>
        </div>
    );
};


export default Register;



