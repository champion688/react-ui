import React, { Component, Fragment } from "react"
import { Menu, Button, Icon, Tooltip } from "antd"
import menuMock from "../../mock/menu.mock"

const { SubMenu } = Menu
const rootSubmenuKeys = []
const MenuList = menuMock.map(menu => {
  let submenu = (
    <SubMenu
      key={menu._id}
      title={
        <span>
          <i className={menu._icon} />
          <span>{menu._title}</span>
          {rootSubmenuKeys.push(menu._id)}
        </span>
      }
    >
      {Array.isArray(menu._subMenus) &&
        menu._subMenus.map(submenu => (
          <Menu.Item key={submenu._id}>
            <i className={submenu._icon} />
            {submenu._title}
            {Array.isArray(submenu._subMenus) &&
              submenu._subMenus.map(item => (
                <Menu.Item key={item._id}>
                  <i className={item._icon} />
                  {item.title}
                </Menu.Item>
              ))}
          </Menu.Item>
        ))}
    </SubMenu>
  )
  let menuItem = (
    <Menu.Item key={menu._id}>
      <i className={menu._icon} />
      {menu._title}
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
  toggleCollapsed() {
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
          className="h-100 overflow-hidden-x"
        >
          <Fragment>
            <Button
              type="primary"
              icon={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggleCollapsed}
              className="float-right mr-4 mt-2"
              size="small"
            />
          </Fragment>
          {MenuList}
        </Menu>
      </Fragment>
    )
  }
}
