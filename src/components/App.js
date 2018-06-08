import React, { Component } from "react"
import { Layout } from "antd"
import Header from "./layout/Header"
import LeftMenu from "./layout/LeftMenu"
import Footer from "./layout/Footer"
import { HashRouter, Switch, Route, Link } from "react-router-dom"

const { Content } = Layout

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Layout className="h-100">
          <Header />
          <Layout className="flex-row left-menu-bar">
            <LeftMenu />
            <Content />
          </Layout>
          <Footer />
        </Layout>
      </HashRouter>
    )
  }
}
