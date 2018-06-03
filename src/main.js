/**
 * @description react-UI 入口文件
 */
import React from "react"
import ReactDom from "react-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/antd/lib/style/index.less"
import RouterConfig from "./router/router.js"

ReactDom.render(<RouterConfig />, document.getElementById("app"))
