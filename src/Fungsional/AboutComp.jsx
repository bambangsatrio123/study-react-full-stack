import { Col, Row } from "antd";
import React from "react";
import CardComp from "./CardComp";

export default function AboutComp() {
  
  return (
    <div className="container">
      <h2>About Page</h2>
      <Row>
        <Col><CardComp id="1" judul="Belajar React" tanggal="5 Oktober 2021" /></Col>
        <Col><CardComp id="2" judul="Belajar Laravel" tanggal="6 Oktober 2021" /></Col>
        <Col><CardComp id="3" judul="Belajar Figma" tanggal="7 Oktober 2021" /></Col>
      </Row>
    </div>
  );
}
