import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

class MenuNavbar extends Component {
  render() {
    return (
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="pie-chart" />
              <span>Dashboard</span>
            </span>
          }
        >
          <Menu.Item key="1">
            <Link to="/">Dashboard Work</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/dashboard-charges">Dashboard Charges</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="3">
          <Link to="/employee">
            <Icon type="user" />
            <span>จัดการพนักงาน</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/project">
            <Icon type="project" />
            <span>โครงการ</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/record-work">
            <Icon type="calendar" />
            <span>บันทึกเวลาทำงาน</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/charges">
            <Icon type="dollar" />
            <span>ค่าใช้จ่าย</span>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuNavbar;
