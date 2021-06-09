import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Actions from "../../store/User/UserAction";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./images/image1.png";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://cronj.com/">
        Cronj Technologies
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
class Login extends React.Component {
  state = {
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    userNameError: "",
    checkedG: true,
  };

  handleChecked = (event) => {
    this.setState({
      checkedG: event.target.checked,
    });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleChange = (e, name) => {
    this.setState({ [name]: e.target.value });
  };

  validateFields = () => {
    let validity = true;

    const email = this.state.email;
    const validEmail = RegExp(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    const password = this.state.password;

    if (email === "" || !validEmail.test(email)) {
      this.setState({ emailError: "Enter valid email" });
      validity = false;
    } else {
      this.setState({ emailError: "" });
    }
    if (password === "") {
      this.setState({ passwordError: "Please Enter password" });
      validity = false;
    } else {
      this.setState({ passwordError: "" });
    }
    // if (!this.validateFile()) {
    //   validity = false;
    // }

    return validity;
  };

  validateFile = () => {};

  submitClick = () => {
    const { email, password } = this.state;
    let payload = {
      email: email,
      password: password,
    };
    if (this.validateFields()) {
      this.props.UserAction.login(payload);
    }
  };

  render() {
    const dashboard = () => {
      const { email, password } = this.state;
      let payload = {
        email: email,
        password: password,
      };
      if (this.validateFields()) {
        this.props.UserAction.login(payload);
        this.props.history.push({
          pathname: "/dashboard",
        });
      }
    };

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <div
          style={{
            marginTop: "10vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <Avatar
            style={{
              margin: "50px",
              width: "90px",
              height: "7vh",
              backgroundColor: "#dc004e",
            }}
          >
            <img src={logo} className="img-fluid" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin Sign in
          </Typography>
          <form
            style={{
              width: "100%", // Fix IE 11 issue.
              marginTop: "2px",
            }}
          >
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={this.state.email}
                onChange={(e) => this.handleChange(e, "email")}
              />
              <div>
                <small style={{ color: "red", paddingLeft: "6px" }}>
                  {this.state.emailError}
                </small>
              </div>
            </div>
            <div>
              <TextField
                className="input"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Enter Password"
                placeholder="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={(e) => this.handleChange(e, "password")}
              />
              <div>
                <small style={{ color: "red", paddingLeft: "6px" }}>
                  {this.state.passwordError}
                </small>
              </div>
            </div>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
              onClick={dashboard}
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  UserReducer: state.UserReducer,
});

function mapDispatchToProps(dispatch) {
  return {
    UserAction: bindActionCreators(Actions, dispatch),
    // candidateActions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
