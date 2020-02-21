import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogin } from "../store/users/actions";
import { withRouter } from "react-router";

export class login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log("this.state", this.state);
    console.log(
      "what is props dispatch in handleSubmit, login.jsx",
      this.props.dispatch
    );
    await this.props.dispatch(userLogin(email, password));
    console.log("handleSubmit-Login: ", this.props.user);

    this.props.history.push("/game_lobby");
  };

  handleChange = event => {
    const { value } = event.target;
    console.log("value in handleChange:", value);
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log("state is", this.state);
  };

  render() {
    return (
      <div class="container">
        <div class="d-flex justify-content-center h-100">
          <div class="card">
            <div class="card-header">
              <h3>Sign In</h3>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    placeholder="email"
                    value={this.state.email}
                    name="email"
                    tabIndex="1"
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-key"></i>
                    </span>
                  </div>
                  <input
                    onChange={this.handleChange}
                    type="password"
                    className="form-control"
                    placeholder="password"
                    value={this.state.password}
                    name="password"
                    tabIndex="2"
                  />
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox" tabIndex="3" />
                  Remember Me
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Login"
                    className="btn float-right login_btn"
                    tabIndex="4"
                  />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?
                <a href="/signup" tabIndex="5">
                  Sign Up
                </a>
              </div>
              <div class="d-flex justify-content-center">
                <a href="/password_reset">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default withRouter(connect(mapStateToProps, { login })(login));
export default withRouter(connect()(login));
