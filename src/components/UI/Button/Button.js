import React, { Component } from "react";
import "./Button.style.scss";

export default class Button extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} className="btn">
        {this.props.children}
      </button>
    );
  }
}
