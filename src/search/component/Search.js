import { Col, Row, Typography } from "antd";
import React from "react";
import Settings from "./Settings";

export default function Search() {
  return (
    <>
      <Row justify="end" style={{ padding: 20 }}>
        <Col>
          <Settings></Settings>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title>찾아야한다</Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{ margin: 50 }}>
        <Col span="12"></Col>
      </Row>
    </>
  );
}
