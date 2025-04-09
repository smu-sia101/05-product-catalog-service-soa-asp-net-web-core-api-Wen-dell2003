import { Button, Typography, Row, Col, Card, Space } from 'antd';
import { ShoppingCartOutlined, AppstoreOutlined, UserOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const { Title, Paragraph } = Typography;


const Home = () => {
    return (
        <div style={{ background: '#f9f9f9', padding: '60px 20px', minHeight: '100vh' }}>
            {/* Headerrr Section */}
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <Title level={1} style={{ color: '#333', fontSize: '48px', fontWeight: '600' }}>
                    Welcome to Product Catalog Service
                </Title>
                <Paragraph style={{ fontSize: '20px', maxWidth: '600px', margin: '0 auto', color: '#666' }}>
                    Discover, Manage, and Simplify – Your One-Stop Solution for Effortless Product Cataloging
                </Paragraph>


                <Space style={{ marginTop: '30px' }} size={30}>
                    <Link to="/products">
                        <Button type="primary" size="large" icon={<ShoppingCartOutlined />} style={{ borderRadius: '50px' }}>
                            Browse Products
                        </Button>
                    </Link>
                    <Link to="/register">
                        <Button size="large" icon={<UserOutlined />} style={{ borderRadius: '50px' }}>
                            Register
                        </Button>
                    </Link>
                </Space>
            </div>


            {/* Features Section */}
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Title level={2} style={{ textAlign: 'center', color: '#444', marginBottom: '40px' }}>
                    Key Features
                </Title>


                <Row gutter={[32, 32]} justify="center">
                    {/* Feature: Product Management */}
                    <Col xs={24} sm={12} md={8}>
                        <Link to="/product-form">
                            <Card
                                hoverable
                                style={{
                                    border: 'none',
                                    borderRadius: '15px',
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                    transition: 'all 0.3s ease',
                                }}
                                cover={
                                    <div
                                        style={{
                                            background: '#1890ff',
                                            padding: '50px',
                                            borderRadius: '15px 15px 0 0',
                                            textAlign: 'center',
                                            boxSizing: 'border-box',
                                        }}
                                    >
                                        <ShoppingOutlined style={{ fontSize: '50px', color: '#fff' }} />
                                    </div>
                                }
                            >
                                <Card.Meta
                                    title="Product Management"
                                    description="Easily manage your product catalog by adding, editing, and removing items."
                                />
                            </Card>
                        </Link>
                    </Col>


                    {/* Feature: Categorization */}
                    <Col xs={24} sm={12} md={8}>
                        <Card
                            hoverable
                            style={{
                                border: 'none',
                                borderRadius: '15px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease',
                            }}
                            cover={
                                <div
                                    style={{
                                        background: '#52c41a',
                                        padding: '50px',
                                        borderRadius: '15px 15px 0 0',
                                        textAlign: 'center',
                                        boxSizing: 'border-box',
                                    }}
                                >
                                    <AppstoreOutlined style={{ fontSize: '50px', color: '#fff' }} />
                                </div>
                            }
                        >
                            <Card.Meta
                                title="Categorization"
                                description="Efficiently organize products into categories for better management."
                            />
                        </Card>
                    </Col>


                    {/* Feature: User Authentication */}
                    <Col xs={24} sm={12} md={8}>
                        <Card
                            hoverable
                            style={{
                                border: 'none',
                                borderRadius: '15px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease',
                            }}
                            cover={
                                <div
                                    style={{
                                        background: '#faad14',
                                        padding: '50px',
                                        borderRadius: '15px 15px 0 0',
                                        textAlign: 'center',
                                        boxSizing: 'border-box',
                                    }}
                                >
                                    <UserOutlined style={{ fontSize: '50px', color: '#fff' }} />
                                </div>
                            }
                        >
                            <Card.Meta
                                title="User Authentication"
                                description="Secure login and registration system to manage user access."
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};


export default Home;





