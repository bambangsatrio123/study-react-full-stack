import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CSS/Produk.css";

export default class Child1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  minBeli = 1;

  render() {
    return (
      <div>
          <h3>Child 1</h3>
          <p>Stok Produk : {this.props.stock}</p>
          <button onClick={() => this.props.fungsi(this.minBeli)}>Beli</button>
      </div>
    );
  }
}
