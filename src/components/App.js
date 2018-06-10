import React, { Component, Fragment } from "react"
import { renderRoutes } from "react-router-config"
import { Layout, Breadcrumb } from "antd"
import Header from "./layout/Header"
import LeftMenu from "./layout/LeftMenu"
import Footer from "./layout/Footer"

const { Content } = Layout

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout className="h-100">
          <Header />
          <Layout className="flex-row main-container">
            <LeftMenu />
            <Content>
              {renderRoutes(this.props.route.routes)}
            </Content>
          </Layout>
          <Footer />
        </Layout>
      </Fragment>
    )
  }
}
