import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';
const { Header, Content } = Layout;
const MenuItem = Menu.Item;

@withRouter
class LayoutContainer extends Component {
  render() {
    const { children, location } = this.props;
    return (
      <Layout>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            style={{ lineHeight: '64px' }}
          >
            <MenuItem key='/demo01'><Link to='/demo01'> Counter </Link></MenuItem>
            <MenuItem key='/demo02'><Link to='/demo02'> TodoList </Link></MenuItem>
            <MenuItem key='/demo03'><Link to='/demo03'> Async </Link></MenuItem>
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