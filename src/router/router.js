/**
 * 路由配置
 */
import React from 'react'
import { HashRouter, Switch, Route, Link } from "react-router-dom"
import App from "../components/App"

export default () => (
  <HashRouter>
    <Route path="/app" component={App} />
  </HashRouter>
)
