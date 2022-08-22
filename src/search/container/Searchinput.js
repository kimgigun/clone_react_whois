import { SearchOutlined } from "@ant-design/icons/lib/icons";
import { AutoComplete, Col, Input, Row, Space, Typography } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../state";

export default function SearchInput() {
  const keyword = useSelector((state) => state.search.keyword);
  console.log("keyword", keyword);
  const dispatch = useDispatch();
  function setKeyword(value) {
    if (value !== keyword) {
      dispatch(actions.setValue("keyword", value));
      dispatch(actions.fetchAutoComplete(value));
    }
  }
  let autoCompletes = useSelector((state) => {
    return state.search.autoCompletes;
  });
  function gotoUser(value) {}
  return (
    <>
      <AutoComplete
        style={{ width: 200 }}
        onChange={setKeyword}
        onSelect={gotoUser}
        value={keyword}
        options={autoCompletes.map((item) => ({
          value: item.name,
          label: (
            <Space>
              <Typography.Text strong>{item.name}</Typography.Text>
              <Typography.Text type="secondary">
                {item.department}
              </Typography.Text>
              <Typography.Text>{item.tag}</Typography.Text>
            </Space>
          ),
        }))}
        autoFocus
      >
        <Input size="large" placeholder="input" prefix={<SearchOutlined />} />
      </AutoComplete>
    </>
  );
}
