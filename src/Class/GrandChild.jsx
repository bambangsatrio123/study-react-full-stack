import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CSS/Produk.css";

export default class GrandChild extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  minBeli = 1;

  render() {
    return (
      <div>
        <h3>Grand Child</h3>
        <p>{this.props.data}</p>
      </div>
    );
  }
}
