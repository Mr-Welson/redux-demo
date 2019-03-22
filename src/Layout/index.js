import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';
const { Header, Content } = Layout;
const MenuItem = Menu.Item;

class LayoutContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <Layout>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['demo01']}
            style={{ lineHeight: '64px' }}
          >
            <MenuItem key='demo01'><Link to='/demo01'> demo01 </Link></MenuItem>
            <MenuItem key='demo02'><Link to='/demo02'> demo02 </Link></MenuItem>
            <MenuItem key='demo03'><Link to='/demo03'> demo03 </Link></MenuItem>
          </Menu>
        </Header>
        <Content>
          { children }
        </Content>
      </Layout>
    )
  }
}

export default LayoutContainer;