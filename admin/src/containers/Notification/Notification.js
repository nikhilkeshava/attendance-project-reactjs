import React, { Component } from "react";
import * as NotificationActions from "../../store/Notification/NotificationAction";
import TableComponent from "../../components/Controls/Table/Table";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import TextFieldGroup from "../../components/TextArea/TextFieldGroup";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Card} from "@material-ui/core"
import Title from "../Dashboard/Title";
import "../Dashboard/dashboard.css";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NotificationName: "",
      NotificationBody: "",
      Link: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    value: "",
    page: 1,
    limit: 10,
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      NotificationName: this.state.NotificationName,
      NotificationBody: this.state.NotificationBody,
      Link: this.state.Link,
    };
    this.props.NotificationAction.addNotificationData(profileData);
    this.props.history.push("/notification");
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  componentDidMount() {
    const payload = {
      page: this.state.page,
      limit: this.state.limit,
    };
    this.props.NotificationAction.getNotificationData(payload);
  }

  handlePagination = (e) => {
    this.setState({ page: e.selected + 1 });
    const payload = {
      page: e.selected + 1,
      limit: this.state.limit,
    };
    this.props.NotificationAction.getNotificationData(payload);
  };

  render() {
    let totalPage;
    const data = [];
    if (
      this.props &&
      this.props.NotificationReducer &&
      this.props.NotificationReducer.getNotificationData &&
      this.props.NotificationReducer.getNotificationData.data &&
      this.props.NotificationReducer.getNotificationData.data.notification
    ) {
      // totalPage =
      // this.props.NotificationReducer.getNotificationData.data.notification /
      //   this.state.limit;
      this.props.NotificationReducer.getNotificationData.data.notification.map(
        (item) => {
          data.push({
            NotificationName: item.NotificationName,
            NotificationBody: item.NotificationBody,
            Link: item.Link,
          });
        }
      );
    }
    console.log("comming data", data);

    let inboundDatacolumn = [
      {
        Header: "Name",
        accessor: "NotificationName",
      },

      {
        Header: "NotificationBody",
        accessor: "NotificationBody",
      },
      {
        Header: "Link",
        accessor: "Link",
      },
    ];

    console.log(
      "props--->",
      this.props,
      this.props.FeatureReducer &&
        this.props.FeatureReducer &&
        this.props.FeatureReducer.getData
    );
    const { classes } = this.props;
    return (
      <>
        <div class="container" style={{ width: "70vh",marginTop:"5vh" }}>
          <Card>
          <form onSubmit={this.onSubmit}> 
            <React.Fragment>
              <Typography variant="h6" center gutterBottom>
                Add Notifications
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <TextFieldGroup
                    placeholder="your Name"
                    name="NotificationName"
                    value={this.state.NotificationName}
                    onChange={this.onChange}
                    info="Enter your Name"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextFieldGroup
                    placeholder="Subject"
                    name="NotificationBody"
                    value={this.state.NotificationBody}
                    onChange={this.onChange}
                    info="Subject"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextFieldGroup
                    placeholder="Link"
                    name="Link"
                    value={this.state.Link}
                    onChange={this.onChange}
                    info="Enter the link"
                  />
                </Grid>
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </Grid>
            </React.Fragment>
          </form>
          </Card>
        </div>

        <Grid
          item
          xs={12}
          sm={6}
          style={{ alignItems: "center", margin: "auto" ,marginTop:"10vh"}}
        >
          <Title>Notifications Data</Title>
          <TableComponent
            data={data}
            columns={inboundDatacolumn}
            handlePageClick={(e) => {
              this.handlePagination(e);
            }}
          />
        </Grid>

        {/* <div
          className="container"
          style={{ marginTop: "7vh", border: "1px solid #f1f1f1" }}
        >
          <div className="row">
            <div className="col-sm-4" style={{ margin: "auto" }}>
              <form onSubmit={this.onSubmit} style={{ padding: "5vh" }}>
                <TextFieldGroup
                  placeholder="eventname"
                  name="event"
                  value={this.state.event}
                  onChange={this.onChange}
                  info="name"
                />
                <TextFieldGroup
                  placeholder="* date Handle"
                  name="date"
                  value={this.state.date}
                  onChange={this.onChange}
                  info="date"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div> */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    NotificationReducer: state.NotificationReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    NotificationAction: bindActionCreators(NotificationActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Notification));
