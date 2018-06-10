/**
 * @description react-UI 入口文件
 */

import 'babel-polyfill'
import React from "react"
import ReactDom from "react-dom"
import "bootstrap/dist/css/bootstrap.css"
import "antd/lib/style/index.less"
import "./assets/css/common.css"
import "./assets/css/iconfont.css"
import "./assets/less/ucmp.less"
import "./assets/scss/ucmp.scss"
import RouterConfig from "@/router"

ReactDom.render(<RouterConfig />, document.getElementById("app"))
