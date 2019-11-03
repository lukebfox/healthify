import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import Form from "./Form.jsx";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
      .spacing.unit * 5}px`
  },
  container: {
    maxWidth: "200px"
  }
});

class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const classes = this.props;
    return (
      <React.Fragment>
        <div className={classes.container}>
          <h1>Form a Habit</h1>
          <Formik render={props => <Form {...props} />} />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(FormPage);
