import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';

const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
`;

const List = styled.ul`
  display: flex;
  margin: none;
  margin: 0;
  list-style-type: none;
  padding: 10px;
  border: 1px solid black;
  li {
    margin: auto;
    font-size: 25px;
    :active {
      color: black;
    }
  }
`;
const Log = styled.div``;

class Navbar extends Component {
 
   delete_cookie=(name,value) =>{
     document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
     document.cookie = value + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
     window.location.href="/";
};

  render() {
    const { location } = this.props;
    return (
      <Wrapper>
        {location &&
          location.pathname === "/" ? null : (
            <List>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/state">State</Link>
              </li>
              <li>
                <Link to="/child">Child</Link>
              </li>
              <i class="material-icons" margin="10px">
                settings_power
            </i>
              <Log onClick={() => this.delete_cookie('token','user_token')}>Logout</Log>
            </List>
          )}
      </Wrapper>
    );
  }
}


export default withRouter(Navbar);