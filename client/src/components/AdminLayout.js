import React from "react";
import { Menu, Dropdown, Button, Row , Col } from "antd";
import {Link} from 'react-router-dom'

// Default layout for all the pages (Header component)
// Components and props (for passing information from one component to another)
function DefaultLayout(props) {
    const admin = JSON.parse(localStorage.getItem('admin'))
  const menu = (
    <Menu>
        <Menu.Item>
            <a href="/admin"> Home </a>
        </Menu.Item>
        <Menu.Item>
            <a href="/addcar" > ADD CAR </a>
        </Menu.Item>
        <Menu.Item onClick={()=>{
            localStorage.removeItem('admin');
            window.location.href='/adminlogin'
        }}>
            <li style={{color:'orangered'}}>Logout</li>
        </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="header bs1">
          <Row gutter={16} justify='center'>
              <Col lg={20} sm={24} xs={24}>
                  <div className="d-flex justify-content-between">
                  <h1 ><b><Link to='/admin' style={{color:'orangered'}}>RENTY</Link></b></h1>

                  <Dropdown overlay={menu} placement="bottomCenter">
                    <Button>{admin.username}</Button>
                  </Dropdown>
                 </div>
              </Col>
          </Row>
        
      </div>
      <div className="content">{props.children}</div>

      <div className="footer text-center">
      <hr />

           <p>Designed and Developed By</p>
            <p>RENTY</p>
          
      </div>
    </div>
  );
}

export default DefaultLayout;
