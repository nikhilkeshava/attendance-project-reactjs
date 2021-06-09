import React, { Component } from "react";

import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";

import { withStyles } from "@material-ui/core/styles";
import Orders from "./Orders";
import HolidayTable from "./HolidayTable";

import NEmp from "./NEmp";
import EmpA from "./EmpA";
import EmpH from "./EmpH";
import Empp from "./Empp";
import Noti from "./Noti";
import Logo from "../../assets/cronj logo.png";
import Graph from "../../components/SmoothLineChart/smooth";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://cronj.com/">
        Cronj Attendance Management Team
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;
const styles = (theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
});

class Dashboard extends Component {
  state = {
    searchNodes: "",
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div
          style={{
            height: "8vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <img
            src={Logo}
            alt="attendance management"
            className="img-fluid"
            style={{
              height: "8vh",
              display: "flex",
              alignItems: "center",
              margin: "auto",
            }}
          />
          <h3>ATTENDANCE MANAGEMENT SYSTEM</h3>
        </div>
        <div className={classes.root}>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                  <Paper style={{ height: 150 }}>
                    <NEmp />
                  </Paper>
                </Grid>
                {/* Recent Orders */}
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                  <Paper style={{ height: 150 }}>
                    <EmpA />
                  </Paper>
                </Grid>
                {/* Recent Orders */}

                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                  <Paper style={{ height: 150 }}>
                    <Empp />
                  </Paper>
                </Grid>
                {/* Recent Orders */}
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                  <Paper style={{ height: 150 }}>
                    <Noti />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>
                    <HolidayTable />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>
                    <Graph />
                  </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Orders />
                  </Paper>
                </Grid>
              </Grid>
              <Box pt={4}>
                <Copyright />
              </Box>
            </Container>
          </main>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);
