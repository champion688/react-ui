import React, { Component } from "react"
import { message } from "antd"
import Header from "./layout/Header.js"
import Footer from "./layout/Footer.js"

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        this is content
        <Footer/>
      </div>
    )
  }
}
