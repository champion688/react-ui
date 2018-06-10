/**
 * @description Header组件所需功能
 */

import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Menu, Dropdown, Button, Icon } from "antd"

export default class Header extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      staff: {
        usertable: {
          gxdwqc: "",
          username: ""
        }
      }
    }
  }
  render() {
    const { staff } = this.state
    const menu = (
      <Menu>
        <Menu.Item key="company">
          <span>所属单位</span>
          <span>{staff.usertable.gxdwqc}</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="userName">
          <span>用户姓名</span>
          <span>{staff.usertable.username}</span>
        </Menu.Item>
        <Menu.Item key="logout">
          <Button type="primary" size="small">
            退出登录
          </Button>
        </Menu.Item>
      </Menu>
    )
    const username = sessionStorage.getItem("username")
    return (
      <header className="d-flex border-bottom py-3 px-4 justify-content-between">
        <span>
          <Icon type="ant-design" className="text-primary mr-2" />
          云应用管理平台
        </span>

        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            {username || "cyp"} <Icon type="down" />
          </a>
        </Dropdown>
      </header>
    )
  }
}
