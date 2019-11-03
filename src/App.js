import React from "react";
import FormPage from "./FormPage.jsx";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import GoalsPage from "./GoalsPage.js";
import SplashPage from "./SplashPage.js";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            <Link style={{ color: "white" }} to="/">
              Healthify
            </Link>
          </Typography>

          <Link to="/">
            <Button style={{ color: "white" }}>Home</Button>
          </Link>
          <Link to="/goals">
            <Button style={{ color: "white" }}>Goals</Button>
          </Link>
          <Button variant="outlined" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Switch>
          <Route path="/" exact component={SplashPage} />
          <Route path="/create_goal" component={FormPage} />
          <Route path="/goals" component={GoalsPage} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
