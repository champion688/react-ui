/**
 * @description ucmp-react-UI 入口文件
 */
import React from "react"
import ReactDom from "react-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/antd/dist/antd.css"
import RouterConfig from "./router/index.js"

ReactDom.render(<RouterConfig />, document.getElementById("app"))
