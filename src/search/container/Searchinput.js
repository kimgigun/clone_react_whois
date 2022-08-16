import { SearchOutlined } from "@ant-design/icons/lib/icons";
import { AutoComplete, Col, Input, Row, Typography } from "antd";
import React from "react";

export default function Search() {
  function setKeyword(value) {}
  function gotoUser(value) {}
  return (
    <>
      <AutoComplete
        style={{ width: 200 }}
        options={[]}
        onChange={setKeyword}
        onSelect={gotoUser}
        value={keyword}
        autoFocus
      >
        <Input size="large" placeholder="input" prefix={<SearchOutlined />} />
      </AutoComplete>
    </>
  );
}
