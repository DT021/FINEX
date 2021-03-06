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
import classes from "./IncomeItemForm.module.css";
import DatePicker from "react-datepicker";
import Collapse from "react-bootstrap/Collapse";
import { CREATE_TRANSACTION } from "../../constants/Constants";

import { DarkModeContext } from "../../contexts/DarkModeContext";

import "react-datepicker/dist/react-datepicker.css";

export default class IncomeItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      name: "",
      type: "Income",
      startDate: "",
      success: false,
      error: false,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
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
        type: "income",
        category: this.state.type,
        cost: this.state.amount,
        name: this.state.name,
        date: this.state.date,
      }),
    }).then((res) => {
      //console.log(res)
      if (res.status === 200) {
        this.setState({
          success: true,
          error: false,
          amount: "",
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

  handleAmountChange(event) {
    this.setState({ amount: event.target.value });
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
                Welcome to <b>FINEX's</b> Add Income Form!
              </h1>
              <p>Below, you may input a new income to your budget!</p>
            </Jumbotron>
            <Collapse in={this.state.success}>
              <div>
                <Alert variant="success">
                  <Alert.Heading>Success</Alert.Heading>
                  <p>
                    You successfully added a new income item for this month.
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
                <Form.Label>Amount</Form.Label>

                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    required
                    type="number"
                    placeholder="e.g. 50"
                    onChange={this.handleAmountChange}
                    value={this.state.amount}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group>
                <Form.Label>Name</Form.Label>
                <InputGroup>
                  <Form.Control
                    required
                    placeholder="e.g. paycheck"
                    onChange={this.handleNameChange}
                    value={this.state.name}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Control
                  as="select"
                  onChange={this.handleTypeChange}
                  value={this.state.type}
                >
                  <option>Income</option>
                  <option>Gift</option>
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
IncomeItemForm.contextType = DarkModeContext;
