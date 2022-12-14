import React from "react";
import { DownOutlined, SettingFilled } from "@ant-design/icons/lib/icons";
import { Dropdown, Space, Menu, Button } from "antd";

export default function Settings(logout) {
  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item onClick={logout}>๋ก๊ทธ์์</Menu.Item>
        </Menu>
      }
      placement="bottomRight"
    >
      <Button shape="circle" icon={<SettingFilled />}></Button>
    </Dropdown>
  );
}
