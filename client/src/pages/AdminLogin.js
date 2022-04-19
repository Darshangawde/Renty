import React from 'react'
import {Row , Col , Form , Input} from 'antd'
import { Link } from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import { adminLogin } from '../redux/actions/adminActions'
import AOS from 'aos';
import Spinner from '../components/Spinner';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function AdminLogin() {
    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alertsReducer)
   
    function onFinish(values) {
        dispatch(adminLogin(values))
        console.log(values)
    }

    return (
        <div className='login'>
            {loading && (<Spinner />)}
            <Row gutter={16} className='d-flex align-items-center' >

                <Col lg={16} style={{position: 'relative'}}>
                    <img 
                    className='w-100' alt='black-car-wallpaper'
                    data-aos='slide-right'
                    data-aos-duration='1500'
                    src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"/>
                     <h1 className='login-logo'>RENTY</h1>
                </Col>
                <Col lg={8} className='text-left p-5'>
                    <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>
                         <h1>Admin Login</h1>
                         <hr />
                         <Form.Item name='username' label='Username' rules={[{required: true}]}>
                             <Input/>
                         </Form.Item>
                         <Form.Item name='password' label='Password' rules={[{required: true}]}>
                             <Input type='password'/>
                         </Form.Item>

                         <button className='btn1 mt-2'>Login</button>
                         <hr />
                         <Link to='/login'>I am an User</Link>

                    </Form>
                </Col>

            </Row>

        </div>
    )
}

export default AdminLogin