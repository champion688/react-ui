/**
 * 路由配置
 */
import React, { Component, Fragment } from "react"
import { BrowserRouter, browserHistory, Route } from "react-router-dom"
import { renderRoutes } from "react-router-config"
import App from "@/components/App"
import operMgmtRoute from "./operMgmt.module"
import userCenterRoute from "./userCenter.module"

const Home = ({ route }) => (
  <div>
    <h2>Home</h2>
  </div>
)
const routes = [
  {
    component: App,
    routes: []
      .concat(operMgmtRoute)
      .concat(userCenterRoute)
      .concat({
        path: "/",
        component: Home
      })
  }
]

export default () => (
  <BrowserRouter history={browserHistory}>{renderRoutes(routes)}</BrowserRouter>
)
