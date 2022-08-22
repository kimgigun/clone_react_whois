import { Col, Row, Typography } from "antd";
import React from "react";
import Settings from "../component/Settings";
import Searchinput from "../container/Searchinput";
import { useSelector } from "react-redux";

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
          <Typography.Title>findUser</Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{ margin: 50 }}>
        <Col span="12">
          <Searchinput></Searchinput>
        </Col>
      </Row>
    </>
  );
}
