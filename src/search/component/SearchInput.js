import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { AutoComplete, Input } from "antd";

export default function Search() {
  return (
    <AutoComplete value={[]} style={{ width: 250 }} options={[]}>
      <Input.Search size="large" placeholder="input here" />
    </AutoComplete>
  );
}
