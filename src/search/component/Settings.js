import React from "react";
import { DownOutlined, SettingFilled } from "@ant-design/icons/lib/icons";
import { Dropdown, Space, Menu, Button } from "antd";

export default function Settings(logout) {
  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item onClick={logout}>로그아웃</Menu.Item>
          {/* <Menu.SubMenu title="sub menu">
            <Menu.Item>item 3</Menu.Item>
          </Menu.SubMenu> */}
        </Menu>
      }
      placement="bottomRight"
    >
      <Button shape="circle" icon={<SettingFilled />}></Button>
    </Dropdown>
  );
}
