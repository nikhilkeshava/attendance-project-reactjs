import React, { Component } from "react";

import * as AttendanceActions from "../../store/Attendance/AttendanceAction";
import TableComponent from "../../components/Controls/Table/Table";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { withRouter, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { withStyles } from "@material-ui/core/styles";
import "./style.css";
import { MDBDataTable } from "mdbreact";

const styles = (theme) => ({
  root: {
    display: "flex",
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
});

class tableattendance extends Component {
  state = {
    value: "",
    page: 1,
    limit: 7,
  };

  componentDidMount() {
    const payload = {
      page: this.state.page,
      limit: this.state.limit,
    };
    this.props.AttendanceAction.getAbsentData(payload);
  }

  handlePagination = async (e) => {
    console.log(e);
    await this.setState({ page: e.selected + 1 });
    console.log(this.state.page);
    const payload = {
      // page: e.selected + 1,
      page: this.state.page,
      limit: this.state.limit,
    };
    this.props.AttendanceAction.getAbsentData(payload);
  };

  render() {
    const data1 = [];
    const data = {
      columns: [
        {
          label: "Name",
          field: "name",
          sort: "asc",
          width: 150,
        },
        {
          label: "Date",
          field: "date1",
          sort: "asc",
          width: 270,
        },
        {
          label: "Subject",
          field: "subject1",
          sort: "asc",
          width: 270,
        },
        {
          label: "Message",
          field: "message1",
          sort: "asc",
          width: 270,
        },
      ],
      rows: data1,
    };
    // let totalPage = 1;

    // const data = [];

    if (
      this.props &&
      this.props.AttendanceReducer &&
      this.props.AttendanceReducer.getAbsentData &&
      this.props.AttendanceReducer.getAbsentData.data &&
      this.props.AttendanceReducer.getAbsentData.data.attendence
    ) {
      this.props.AttendanceReducer.getAbsentData.data.attendence.map((item) => {
        data1.push({
          name: item.name,
          date1: item.date,
          subject1: item.subject,
          message1: item.message,
        });
      });
    }

    // let inboundDatacolumn = [
    //   {
    //     Header: "Name",
    //     accessor: "name",
    //   },

    //   {
    //     Header: "Date",
    //     accessor: "date",
    //   },
    //   {
    //     Header: "Subject",
    //     accessor: "subject",
    //   },
    //   {
    //     Header: "Message",
    //     accessor: "message",
    //   },
    // ];

    console.log(
      "props--->",
      this.props,
      this.props.FeatureReducer &&
        this.props.FeatureReducer &&
        this.props.FeatureReducer.getData
    );
    const { classes } = this.props;
    return (
      <div className="atn-main-page">
        <div className="atn-header">
          <div
            style={{
              height: "8vh",

              margin: "auto",
            }}
          >
            <h3>ATTENDENCE MANAGEMENT SYSTEM</h3>
          </div>
        </div>

        <div maxWidth="lg" className={classes.container}>
          <div className="attendencesize">
            {/* <React.Fragment> */}
            <Grid xs={12}>
              <Paper className={classes.paper}>
                <h4>Users Data</h4>
                <MDBDataTable striped bordered data={data} />
                {/* </React.Fragment> */}
              </Paper>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    AttendanceReducer: state.AttendanceReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AttendanceAction: bindActionCreators(AttendanceActions, dispatch),
  };
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(withRouter(tableattendance))
);
