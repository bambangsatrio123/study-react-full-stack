import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CSS/Produk.css";
import GrandChild from "./GrandChild";

export default class Child2 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Child 2</h3>
        <p>{this.props.stock}</p>
        <GrandChild data={this.props.stock} />
      </div>
    );
  }
}
