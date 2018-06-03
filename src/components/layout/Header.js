import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Menu, Dropdown, Button, Modal, message } from "antd"

const { confirm } = Modal

export default class Header extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props, context) {
    super(props)
    this.state = {
      loading: false,
      staff: {
        onlineCount: "",
        monthCount: "",
        usertable: {
          gxdwqc: "",
          longmobile: "",
          post: "",
          shortmobile: "",
          username: "",
          userid: ""
        }
      }
    }
  }
  render() {
    const { staff } = this.state
    const menu = (
      <Menu className="nav-dropmenu">
        <Menu.Item key="0">
          <span className="label">所属单位</span>
          <span>{staff.usertable.gxdwqc}</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
          <span className="label">用户姓名</span>
          <span>{staff.usertable.username}</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Button type="primary" size="small">
            退出登录
          </Button>
        </Menu.Item>
      </Menu>
    )
    const username = sessionStorage.getItem("username")
    return (
      <header id="navbar">
        <div id="navbar-container" className="boxed">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <div className="brand-title">
                <span className="brand-text">cyp</span>
              </div>
            </Link>
          </div>
          <div className="navbar-content clearfix">
            <ul className="nav navbar-top-links pull-right">
              <li className="login-info">
                <Dropdown overlay={menu} trigger={["click"]}>
                  <a className="ant-dropdown-link">{username || "cyp"}</a>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}
