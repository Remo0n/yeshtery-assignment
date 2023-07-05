import React, { Component } from "react";
import "./PreLoading.style.scss";

export default class PreLoading extends Component {
  render() {
    return (
      <div className="preloading-wrapper">
        <img src="/images/logo.png" alt="logo" />
        <div class="progress progress-moved">
          <div class="progress-bar"></div>
        </div>
      </div>
    );
  }
}
