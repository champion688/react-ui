/**
 * @description 路由配置
 */

import React, { Component, Fragment } from "react"
import { BrowserRouter, browserHistory, Route } from "react-router-dom"
import { renderRoutes } from "react-router-config"
import App from "@/components/App"
import Dashboard from "@/components/dashboard/Dashboard"
import operMgmtRoute from "./operMgmt.module"
import userCenterRoute from "./userCenter.module"
import systemRoute from "./system.module"
import monitorAlarmRoute from "./monitorAlarm.module"

const Home = ({ route }) => (
  <div>
    <h2>Home</h2>
  </div>
)
const routes = [
  {
    path: "/",
    component: App,
    routes: []
      .concat(operMgmtRoute)
      .concat(userCenterRoute)
      .concat(systemRoute)
      .concat(monitorAlarmRoute)
      .concat({ path: "/dashboard", component: Dashboard })
  }
]

export default () => (
  <BrowserRouter history={browserHistory}>{renderRoutes(routes)}</BrowserRouter>
)
