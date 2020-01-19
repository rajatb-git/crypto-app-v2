import React, { Component } from "react";
import ReactDOM from "react-dom";

import Input from "../Input/Input.jsx";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { title } = this.state;

    return (
      <form id="article-form">
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={title}
          handleChange={this.handleChange} />
      </form>
    );
  }
}

export default FormContainer;
