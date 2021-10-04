import React from "react";
import { Button, Card } from "antd";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default function CardComp(props) {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://placeimg.com/640/480/tech" />}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <Link to={
              {
                  pathname : `/detail/${props.id}`,
                  state: {
                      judul: props.judul,
                      tanggal: props.tanggal,
                  }
              }
          }>
            <Button type="primary" key="button">
              Button
            </Button>
          </Link>,
        ]}
      >
        <Meta title={props.judul} description={props.tanggal} />
      </Card>
    </div>
  );
}
