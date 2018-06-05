import React, { Component, Fragment } from "react"
import { Menu, Button, Icon } from "antd"

const { SubMenu } = Menu

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
    this.toggleCollapsed = this.toggleCollapsed.bind(this)
  }
  toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <Fragment>
        <Menu mode="inline" inlineCollapsed={this.state.collapsed}>
          <SubMenu
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item>
              <Icon type="menu-unfold" />子菜单项
            </Menu.Item>
          </SubMenu>
          <SubMenu
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item>
              <Icon type="menu-unfold" />子菜单项
            </Menu.Item>
          </SubMenu>
          <SubMenu
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item>
              <Icon type="menu-unfold" />子菜单项
            </Menu.Item>
          </SubMenu>
          <SubMenu
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item>
              <Icon type="menu-unfold" />子菜单项
            </Menu.Item>
            <Menu.Item>
              <Icon type="menu-unfold" />子菜单项
            </Menu.Item>
            <Menu.Item>
              <Icon type="menu-unfold" />子菜单项
            </Menu.Item>
            <Menu.Item>子菜单项</Menu.Item>
          </SubMenu>
          <SubMenu
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item>子菜单项</Menu.Item>
          </SubMenu>
        </Menu>
        <Button type="primary" onClick={this.toggleCollapsed}>
          <Icon type={this.state.collapsed ? "menu-unfold" : "menu-fold"} />
        </Button>
      </Fragment>
    )
  }
}
