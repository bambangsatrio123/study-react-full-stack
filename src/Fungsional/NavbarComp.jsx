import React from 'react'
import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from 'react-router-dom';

const { Header } = Layout;

export default function NavbarComp() {
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about">About</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/mahasiswa">Mahasiswa</Link>
              </Menu.Item>
            </Menu>
          </Header>          
        </Layout>
      </div>
    );
}
