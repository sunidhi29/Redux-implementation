import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUser } from "../actions/index";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
`;

const Subwrap = styled.div`
  margin-left: 0%;
`;

const Logo = styled.img`
  border-radius: 60%;
  border: 2px solid green;
  width: 8%;
  margin-top: 120px;
  margin-left: 45%;
`;
const InputFields = styled.input`
  border: none;
  width: 20%;
  border-bottom: 1px solid grey;
  margin: 41px 43px 40px 457px;
`;
const Button = styled.button`
  width: 25%;
  margin: 10px 10px 10px 428px;
  background-color: green;
`;

const Heading = styled.h2`
  margin-left: 520px;
  margin-top: 15px;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "1412",
      password: "142487"
    };
  }

  onSubmit = () => {
    this.props.getUser(
      this.state.username,
      this.state.password,
      this.props.history
    );
  };
  render() {
    return (
      <Wrapper>
        <Subwrap>
          <Logo src="https://via.placeholder.com/150x150" />
          <Heading>Login</Heading>
          <InputFields
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={e => {
              this.setState({ username: e.target.value });
            }}
          />
          <InputFields
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={e => {
              this.setState({ password: e.target.value });
            }}
          />
          <Button type="button" onClick={() => this.onSubmit()}>
            LOGIN
          </Button>
        </Subwrap>
      </Wrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    user_data: state.unsplash.user_data
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getUser }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
