import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CSS/Produk.css";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stock: 10,
    };
  }

  beliProduk = (jumlah) => {
    this.setState({
      stock: this.state.stock - jumlah,
    });
  };

  render() {
    return (
      <div>
        <Child1 stock={this.state.stock} fungsi={this.beliProduk.bind(this)} />
        <Child2 stock={this.state.stock} />
      </div>
    );
  }
}
