import React, { Component } from "react";
import { Breadcrumb } from "antd";
class BreadcrumbLayout extends Component {
  render() {
    const { title } = this.props;
    return (
      <Breadcrumb style={{ margin: "20px 0 10px 20px" }}>
        <Breadcrumb.Item>หน้าหลัก</Breadcrumb.Item>
        <Breadcrumb.Item>{title}</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default BreadcrumbLayout;
