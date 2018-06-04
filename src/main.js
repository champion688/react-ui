/**
 * @description react-UI 入口文件
 */
import React from "react"
import ReactDom from "react-dom"
import "bootstrap/dist/css/bootstrap.css"
import "antd/lib/style/index.less"
import RouterConfig from "./router/router.js"

ReactDom.render(<RouterConfig />, document.getElementById("app"))
