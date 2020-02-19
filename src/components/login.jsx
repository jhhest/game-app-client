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
      // <form onSubmit={this.handleSubmit}>
      //   <p>
      //     emailadres:
      //     <input
      //       onChange={this.handleChange}
      //       type="text"
      //       value={this.state.email}
      //       name="email"
      //     />
      //   </p>
      //   <p>
      //     password:
      //     <input
      //       onChange={this.handleChange}
      //       type="text"
      //       value={this.state.password}
      //       name="password"
      //     />
      //   </p>
      //   <button type="submit">submit</button>
      //   <Link to="/signup"><p>Signup</p></Link>
      // </form>

      <div class="container">
        <div class="d-flex justify-content-center h-100">
          <div class="card">
            <div class="card-header">
              <h3>Sign In</h3>
            </div>
            <div class="card-body">
              <form onSubmit={this.handleSubmit}>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    class="form-control"
                    placeholder="email"
                    value={this.state.email}
                    name="email"
                    tabindex="1"
                  />
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-key"></i>
                    </span>
                  </div>
                  <input
                    onChange={this.handleChange}
                    type="password"
                    class="form-control"
                    placeholder="password"
                    value={this.state.password}
                    name="password"
                    tabindex="2"
                  />
                </div>
                <div class="row align-items-center remember">
                  <input type="checkbox" tabindex="3" />
                  Remember Me
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Login"
                    class="btn float-right login_btn"
                    tabindex="4"
                  />
                </div>
              </form>
            </div>
            <div class="card-footer">
              <div class="d-flex justify-content-center links">
                Don't have an account?
                <a href="/signup" tabindex="5">
                  Sign Up
                </a>
              </div>
              <div class="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
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
