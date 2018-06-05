import React, { Component } from "react"
import { Layout } from "antd"
import Header from "./layout/Header"
import LeftMenu from "./layout/LeftMenu"
import Footer from "./layout/Footer"

const { Content } = Layout

export default class App extends Component {
  render() {
    return (
      <Layout className="h-100">
        <Header />
        <Layout className="flex-row left-menu-bar">
          <LeftMenu />
          <Content />
        </Layout>

        <Footer />
      </Layout>
    )
  }
}
