import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  float: left;
  background-color: aliceblue;
`;
const Subwrapper = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 22px;
  border: 1px solid #5cb85c;
  color: white;
  background: black;
  li {
    padding-right: 158px;
  }
`;

export default class Home extends Component {
  render() {
    if (document.cookie.includes("user_token"))
      return (
        <Wrapper>
          <Subwrapper>
            <li>Name:Ramesh Prakash</li>
            <li>Organization:Bal Vikas</li>
            <li>Desigation:Cluster Coordinator</li>
          </Subwrapper>
        </Wrapper>
      );
    else {
      window.alert("please login");
      window.location.href = "/"
    }
  }
}
