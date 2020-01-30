import React, { Component } from "react";
import { Layout } from "antd";
import Menu from "../menu";
import Footer from "../footer";
import Breadcrumb from "../breadcrumb";

const { Header, Sider, Content } = Layout;

class LayoutPage extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { children, title } = this.props;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          style={{ maxWidth: "250px" }}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu />
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Breadcrumb title={title} />
          <Content style={{ margin: "0 16px" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default LayoutPage;
