/**
 * @description 左侧导航菜单组件
 */

import React, { Component, Fragment } from "react"
import { Menu, Button, Icon } from "antd"
import { Link } from "react-router-dom"
import menuMock from "../../mock/menu.mock"

const { SubMenu } = Menu
const rootSubmenuKeys = []
const MenuList = menuMock.map(menu => {
  let submenu = (
    <SubMenu
      key={menu._id}
      title={
        <span>
          <Icon type={menu._icon} />
          <span>{menu._title}</span>
          <span className="d-none">{rootSubmenuKeys.push(menu._id)}</span>
        </span>
      }
    >
      {Array.isArray(menu._subMenus) &&
        menu._subMenus.map(submenu => (
          <Menu.Item key={submenu._id}>
            <Link to={submenu._url}>
              <Icon type={submenu._icon} />
              {submenu._title}
            </Link>
            {Array.isArray(submenu._subMenus) &&
              submenu._subMenus.map(item => (
                <Menu.Item key={item._id}>
                  <Link to={item._url}>
                    <Icon type={item._icon} />
                    {item._title}
                  </Link>
                </Menu.Item>
              ))}
          </Menu.Item>
        ))}
    </SubMenu>
  )
  let menuItem = (
    <Menu.Item key={menu._id}>
      <Link to={menu._url}>
        <Icon type={menu._icon} />
        <span>{menu._title}</span>
      </Link>
    </Menu.Item>
  )
  return Array.isArray(menu._subMenus) && menu._subMenus.length
    ? submenu
    : menuItem
})

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      openKeys: []
    }
    this.toggleCollapsed = this.toggleCollapsed.bind(this)
    this.onOpenChange = this.onOpenChange.bind(this)
  }
  toggleCollapsed(e) {
    e.stopPropagation()
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  onOpenChange(openKeys) {
    const latestOpenKey = openKeys.find(
      key => !this.state.openKeys.includes(key)
    )
    if (!rootSubmenuKeys.includes(latestOpenKey)) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      })
    }
  }
  render() {
    return (
      <Fragment>
        <Menu
          mode="inline"
          inlineCollapsed={this.state.collapsed}
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          className="h-100 overflow-auto left-menu-bar"
        >
          {MenuList}
        </Menu>
        <Button
          type="primary"
          icon={this.state.collapsed ? "menu-unfold" : "menu-fold"}
          onClick={this.toggleCollapsed}
          className="float-right fold-btn"
          size="small"
        />
      </Fragment>
    )
  }
}
