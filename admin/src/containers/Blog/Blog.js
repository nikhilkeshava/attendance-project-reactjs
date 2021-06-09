import React, { Component } from "react";
import * as BlogAction from "../../store/Blog/BlogActions";
import TableComponent from "../../components/Controls/Table/Table";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import TextFieldGroup from "../../components/TextArea/TextFieldGroup";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";
import Title from "../Dashboard/Title";
import "../Dashboard/dashboard.css";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      message: "",
      creator: "",
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
      title: this.state.title,
      message: this.state.message,
      creator: this.state.creator,
    };
    this.props.BlogAction.addBlogData(profileData);
    this.props.history.push("/blog");
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  componentDidMount() {
    const payload = {
      page: this.state.page,
      limit: this.state.limit,
    };
    this.props.BlogAction.getBlogData(payload);
  }

  handlePagination = (e) => {
    this.setState({ page: e.selected + 1 });
    const payload = {
      page: e.selected + 1,
      limit: this.state.limit,
    };
    this.props.BlogAction.getBlogData(payload);
  };

  render() {
    let totalPage;
    const data = [];
    if (
      this.props &&
      this.props.BlogReducer &&
      this.props.BlogReducer.getBlogData &&
      this.props.BlogReducer.getBlogData.data &&
      this.props.BlogReducer.getBlogData.data.blog
    ) {
      // totalPage =
      // this.props.NotificationReducer.getNotificationData.data.notification /
      //   this.state.limit;
      this.props.BlogReducer.getBlogData.data.blog.map((item) => {
        data.push({
          title: item.title,
          message: item.message,
          creator: item.creator,
        });
      });
    }
    console.log("comming data", data);

    let inboundDatacolumn = [
      {
        Header: "title",
        accessor: "title",
      },

      {
        Header: "message",
        accessor: "message",
      },
      {
        Header: "creator",
        accessor: "creator",
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
        <div class="container" style={{ width: "70vh", marginTop: "5vh" }}>
          <Card>
            <form onSubmit={this.onSubmit}>
              <React.Fragment>
                <Typography variant="h6" center gutterBottom>
                  Add Blog
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <TextFieldGroup
                      placeholder="title"
                      name="title"
                      value={this.state.title}
                      onChange={this.onChange}
                      info="title of the blog"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextFieldGroup
                      placeholder="message"
                      name="message"
                      value={this.state.message}
                      onChange={this.onChange}
                      info="message you want to give"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextFieldGroup
                      placeholder="creator"
                      name="creator"
                      value={this.state.creator}
                      onChange={this.onChange}
                      info="your name"
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
          style={{ alignItems: "center", margin: "auto", marginTop: "10vh" }}
        >
          <Title>post a blog</Title>
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
    BlogReducer: state.BlogReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    BlogAction: bindActionCreators(BlogAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Blog));
