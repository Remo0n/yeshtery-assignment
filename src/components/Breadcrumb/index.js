import React, { Component } from "react";
import "./Breadcrumb.style.scss";

export default class Breadcrumb extends Component {
  render() {
    return (
      <div class="breadcrumb-wrapper">
        <ul class="breadcrumb">
          <li>HOME</li>
          <li>All rugs </li>
          <li>Kilim & tulu</li>
          <li>Name of product</li>
        </ul>
      </div>
    );
  }
}
