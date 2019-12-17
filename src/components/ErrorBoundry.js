import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error + info);
  }

  render() {
    if (this.state.hasError === true) {
      return <h1>OOOOOPS SOMETHING WENT WRONG</h1>;
    } else {
      return this.props.children;
    }
  }
}
