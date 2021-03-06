import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Card from 'react-bootstrap/Card'
// import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
// import Dropdown from "react-bootstrap/Dropdown";
import Jumbotron from "react-bootstrap/Jumbotron";
// import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
// import history from "../routing/History";
import classes from "./BudgetItemForm.module.css";
import { CREATE_TRANSACTION } from "../../constants/Constants";
import DatePicker from "react-datepicker";
import Collapse from "react-bootstrap/Collapse";

import { DarkModeContext } from "../../contexts/DarkModeContext";

import "react-datepicker/dist/react-datepicker.css";
// import { Col } from "react-bootstrap";

export default class BudgetItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cost: "",
      name: "",
      type: "Housing",
      startDate: "",
      success: false,
      error: false,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCostChange = this.handleCostChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(CREATE_TRANSACTION, {
      method: "POST",
      withCredentials: true,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "expense",
        category: this.state.type.toLowerCase(),
        cost: this.state.cost,
        name: this.state.name,
        date: this.state.date,
      }),
    }).then((res) => {
      // console.log(res);
      if (res.status === 200) {
        this.setState({
          success: true,
          error: false,
          cost: "",
          name: "",
        });
      }
      if (res.status === 400) {
        this.setState({
          success: false,
          error: true,
        });
      }
    });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleCostChange(event) {
    this.setState({ cost: event.target.value });
  }

  handleTypeChange(event) {
    this.setState({ type: event.target.value });
  }

  handleDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <div className={classes.wrapper}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "50rem" }}>
            <Jumbotron
              className={this.context.isDarkMode ? "bg-dark" : classes.jumbo}
            >
              <h1>
                Welcome to <b>FINEX's</b> Add Budget Form!
              </h1>
              <p>Below, you may input a new item to your budget!</p>
            </Jumbotron>
            <Collapse in={this.state.success}>
              <div>
                <Alert variant="success">
                  <Alert.Heading>Success</Alert.Heading>
                  <p>
                    You successfully added a new item to your expenses for this
                    month
                  </p>
                </Alert>
              </div>
            </Collapse>
            <Collapse in={this.state.error}>
              <div>
                <Alert variant="danger">
                  <Alert.Heading>Error</Alert.Heading>
                  <p>
                    Something went wrong. Please try submitting again. If this
                    error continues please try checking your internet connection
                    or try restarting your Web Browser.
                  </p>
                </Alert>
              </div>
            </Collapse>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Cost</Form.Label>

                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="number"
                    placeholder="e.g. 50"
                    onChange={this.handleCostChange}
                    value={this.state.cost}
                    required
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group>
                <Form.Label>Name</Form.Label>
                <InputGroup>
                  <Form.Control
                    placeholder="e.g. water bill"
                    onChange={this.handleNameChange}
                    value={this.state.name}
                    required
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Control
                  as="select"
                  onChange={this.handleTypeChange}
                  value={this.state.type}
                  required
                >
                  <option>Housing</option>
                  <option>Utilities</option>
                  <option>Transportation</option>
                  <option>Food</option>
                  <option>Medical</option>
                  <option>Savings</option>
                  <option>Personal</option>
                  <option>Entertainment</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Date</Form.Label>
                <br />
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleDateChange}
                />
              </Form.Group>

              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
BudgetItemForm.contextType = DarkModeContext;
