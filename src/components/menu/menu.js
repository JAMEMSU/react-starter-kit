import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

class MenuNavbar extends Component {
  render() {
    return (
      <Menu theme="dark" defaultSelectedKeys={[""]} mode="inline">
        <Menu.Item key="1">
          <Link to="/">
            <Icon type="bar-chart" />
            <span>กราฟสรุปค่าใช้จ่าย</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/dashboard-work">
            <Icon type="bar-chart" />
            <span>กราฟสรุปการทำงาน</span>
          </Link>
        </Menu.Item>

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
