import React, { Component } from "react";
import { Table } from "antd";
import Layout from "../../layout";

const dataSource = [
  {
    order: "1",
    projectmall: "Coop DPO",
    project: "Zyan DPO",
    department: "อ.ศ.ค",
    startproject: "2019-02-01"
  }
];

const columns = [
  {
    title: "ลำดับ",
    dataIndex: "order",
    key: "order"
  },
  {
    title: "โครงการย่อย",
    dataIndex: "projectmall",
    key: "projectmall"
  },
  {
    title: "โครงการหลัก",
    dataIndex: "project",
    key: "project"
  },
  {
    title: "หน่วยงาน",
    dataIndex: "department",
    key: "department"
  },
  {
    title: "วันที่เริ่มโครงการ",
    dataIndex: "startproject",
    key: "startproject"
  }
];

class Project extends Component {
  render() {
    return (
      <Layout title="โครงการ">
        <h2 style={{ fontWeight: "600" }}>โครงการ</h2>
        <Table dataSource={dataSource} columns={columns} />;
      </Layout>
    );
  }
}

export default Project;
