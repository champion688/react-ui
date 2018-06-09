/**
 * @description Footer组件展示内容
 */

import React, { Component } from "react"
import { Row, Col } from "antd"

export default class Footer extends Component {
  constructor(props, context) {
    super(props)
  }
  render() {
    return (
      <footer className="d-flex justify-content-center border-top">
        <Row gutter={16} className="py-2 footer">
          <Col span={6}>Bootstrap 中文网</Col>
          <Col span={6}>Parcel 中文网</Col>
          <Col span={6}>Node.js 中文网</Col>
          <Col span={6}>中文网优站精选</Col>
        </Row>
      </footer>
    )
  }
}
