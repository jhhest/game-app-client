import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userSignUp } from "../store/users/actions";


export class signup extends Component {
    state = {
        username: "",
        email: "",
        password: ""
      };

handleSubmit = async event => {
        event.preventDefault();
        const { username, email, password } = this.state;
        console.log("this.state", this.state);

        this.props.dispatch(userSignUp(username, email, password));
        this.clear()
        this.props.history.push("/login")    
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

  clear = () => {
    console.log('clear test')
    this.setState({         
    username: "",
    email: "",
    password: "" })
  }

    render() {
        return (
        <div>
            Sign-up 
        <form onSubmit={this.handleSubmit}>
        <p>
          username:
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.username}
            name="username"
          />
        </p>
        <p>
          emailadres:
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.email}
            name="email"
          />
        </p>
        <p>
          password:
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.password}
            name="password"
          />
        </p>
        <input type="submit" value="Let's Start Playing" />
      </form>
            <Link to="/"><p>Back to Home</p></Link>
          </div>
        )
    }
}

export default connect()(signup);
