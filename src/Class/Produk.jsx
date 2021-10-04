import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./CSS/Produk.css"

export default class Produk extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stock,
            sub: "Beli",
            status: "Tersedia",
            disabled: false,
        }
    }

    ButtonBeli = () => {
        this.setState ({
            stock: this.state.stock - 1
        })

        if(this.state.stock === 1) {
            this.setState({
                status: "habis",
                disabled: true
            })
        }
    }

    render() {
        return (
          <div className="box-stock">
            <h2>{this.props.nama}</h2>
            <img src="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2019/11/15/3838857227.jpg" alt=""></img>
            <p>
              <b>Rp. {this.props.harga}</b>
            </p>
            <p>{this.state.stock}</p>
            <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>
              Beli
            </button>
            <p>{this.state.status}</p>
          </div>
        );
    }
}
