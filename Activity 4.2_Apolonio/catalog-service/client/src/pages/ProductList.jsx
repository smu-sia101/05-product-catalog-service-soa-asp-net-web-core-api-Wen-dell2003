import { useState, useEffect, useContext } from 'react';
import {
    Table,
    Button,
    Space,
    Popconfirm,
    message,
    Typography,
    Image,
    Tag,
    Input,
    Select
} from 'antd';
import {
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
    SearchOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import * as productService from '../services/productService';


const { Title } = Typography;
const { Option } = Select;


const ProductList = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const [products, setProducts] = useState([
        {
            _id: '1',
            name: 'Wireless Mouse',
            description: 'Ergonomic wireless mouse with adjustable DPI.',
            price: 1299.00,
            category: 'Electronics',
            stock: 50,
            imageUrl: 'https://images.unsplash.com/photo-1739742473235-34a7bd9b8f87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdpcmVsZXNzJTIwbW91c2V8ZW58MHx8MHx8fDA%3D',
        },
        {
            _id: '2',
            name: 'Gaming Keyboard',
            description: 'Mechanical keyboard with RGB lighting.',
            price: 3799.00,
            category: 'Electronics',
            stock: 30,
            imageUrl: 'https://images.unsplash.com/photo-1612600840881-8aba94904ab9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEdhbWluZyUyMGtleWJvYXJkfGVufDB8fDB8fHww',
        },
        {
            _id: '3',
            name: 'Running Shoes',
            description: 'Lightweight running shoes for daily exercise.',
            price: 2299.00,
            category: 'Footwear',
            stock: 20,
            imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFJ1bm5pbmclMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            _id: '4',
            name: 'Backpack',
            description: 'Durable backpack with multiple compartments.',
            price: 450.00,
            category: 'Accessories',
            stock: 15,
            imageUrl: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QkFja3BhY2t8ZW58MHx8MHx8fDA%3D',
        },
        {
            _id: '5',
            name: 'Smartphone',
            description: 'Latest model smartphone with advanced features.',
            price: 10000.00,
            category: 'Electronics',
            stock: 10,
            imageUrl: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lfGVufDB8fDB8fHww',
        },
        {
            _id: '6',
            name: 'Wrist Watch',
            description: 'Stylish wristwatch with leather strap.',
            price: 5999.00,
            category: 'Accessories',
            stock: 25,
            imageUrl: 'https://images.unsplash.com/photo-1662333084914-3eea84762671?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V3Jpc3QlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            _id: '7',
            name: 'Yoga Mat',
            description: 'Non-slip yoga mat for fitness enthusiasts.',
            price: 70.00,
            category: 'Fitness',
            stock: 40,
            imageUrl: 'https://media.istockphoto.com/id/184883473/photo/exercise-mat.webp?a=1&b=1&s=612x612&w=0&k=20&c=Cu71Xe66Nz-hEaF55gDEDk5wdG1ALCOBNjuGNThCwYo=',
        },
        {
            _id: '8',
            name: 'Bluetooth Speaker',
            description: 'Portable speaker with high-quality sound.',
            price: 2499.00,
            category: 'Electronics',
            stock: 35,
            imageUrl: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Qmx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            _id: '9',
            name: 'Sunglasses',
            description: 'Polarized sunglasses for outdoor activities.',
            price: 150.00,
            category: 'Accessories',
            stock: 60,
            imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3VuJTIwZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            _id: '10',
            name: 'Water Bottle',
            description: 'Insulated water bottle to keep drinks cold.',
            price: 50.00,
            category: 'Fitness',
            stock: 100,
            imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D',
        },
    ]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
                if (storedProducts.length > 0) {
                    setProducts(storedProducts);
                } else {
                    const data = await productService.getAllProducts();
                    setProducts(data);
                    localStorage.setItem('products', JSON.stringify(data));
                }
                const uniqueCategories = [...new Set(products.map(product => product.category))];
                setCategories(uniqueCategories);
            } catch (error) {
                message.error('Failed to fetch products');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };


        fetchProducts();
    }, []);


    useEffect(() => {
        const uniqueCategories = [...new Set(products.map(product => product.category))];
        setCategories(uniqueCategories);
    }, [products]);


    const handleDelete = async (id) => {
        try {
            await productService.deleteProduct(id);
            setProducts(products.filter(product => product._id !== id));
            message.success('Product deleted successfully');
        } catch (error) {
            message.error('Failed to delete product');
            console.error(error);
        }
    };


    const filteredProducts = products.filter(product => {
        const matchesSearch =
            product.name.toLowerCase().includes(searchText.toLowerCase()) ||
            product.description.toLowerCase().includes(searchText.toLowerCase());
        const matchesCategory = !categoryFilter || product.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });


    const columns = [
        {
            title: 'Image',
            dataIndex: 'imageUrl',
            key: 'imageUrl',
            render: imageUrl => (
                <Image
                    src={imageUrl}
                    alt="Product"
                    width={60}
                    height={60}
                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                    fallback="https://via.placeholder.com/60"
                />
            ),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: price => `₱${price.toFixed(2)}`,
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            render: category => <Tag color="blue">{category}</Tag>,
        },
        {
            title: 'Stock',
            dataIndex: 'stock',
            key: 'stock',
            sorter: (a, b) => a.stock - b.stock,
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Space size="small">
                    <Link to={`/products/${record._id}`}>
                        <Button type="primary" icon={<EditOutlined />} size="small">
                            Edit
                        </Button>
                    </Link>
                    <Popconfirm
                        title="Are you sure you want to delete this product?"
                        onConfirm={() => handleDelete(record._id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="primary" danger icon={<DeleteOutlined />} size="small">
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
            hidden: !isAuthenticated,
        },
    ].filter(col => !col.hidden);


    return (
        <div style={{ padding: '30px', backgroundColor: '#f5f5f5' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px'
            }}>
                <Title level={2} style={{ color: '#002F6C' }}>Products</Title>
                {isAuthenticated && (
                    <Link to="/products/new">
                        <Button type="primary" icon={<PlusOutlined />} size="large" style={{ backgroundColor: '#FFD700', borderColor: '#FFD700' }}>
                            Add Product
                        </Button>
                    </Link>
                )}
            </div>


            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px'
            }}>
                <Space size="middle">
                    <Input
                        placeholder="Search products"
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                        prefix={<SearchOutlined />}
                        style={{ width: 250, borderRadius: '4px' }}
                        allowClear
                    />
                    <Select
                        placeholder="Filter by category"
                        value={categoryFilter}
                        onChange={value => setCategoryFilter(value)}
                        style={{ width: 180, borderRadius: '4px' }}
                        allowClear
                    >
                        {categories.map(category => (
                            <Option key={category} value={category}>{category}</Option>
                        ))}
                    </Select>
                </Space>
                <Typography.Text style={{ fontSize: '14px', color: '#333' }}>
                    {filteredProducts.length} product(s) found
                </Typography.Text>
            </div>


            <Table
                columns={columns}
                dataSource={filteredProducts.map(product => ({ ...product, key: product._id }))}
                loading={loading}
                pagination={{ pageSize: 10 }}
                rowKey="_id"
                style={{ backgroundColor: '#fff', borderRadius: '8px' }}
            />
        </div>
    );
};


export default ProductList;





