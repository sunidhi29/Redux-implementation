import React, { Component } from "react";
import { getState } from "../actions/index";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addState } from "../actions/index";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const States = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid #449d44;
  border-radius: 8px;
  width: 25%;
  padding: 10px;
  margin: 24px;
`;
const AddState = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #449d44;
  border-radius: 8px;
  width: 25%;
  padding: 10px;
  margin: 24px;
  button {
    width: 40%;
    margin: 10px 10px 10px 90px;
    background-color: cornsilk;
  }
  input {
    margin: 10px 10px 11px 41px;
  }
`;

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state_name: ""
    };
  }
  newstate() {
    const { addState } = this.props;
    const { state_name } = this.state;
    addState(state_name);
  }
  componentDidMount() {
    const { getState } = this.props;
    getState();
  }
  render() {
    const { show_state } = this.props;

    return (
      <Wrapper>
        <AddState>
          <i class="material-icons">add_circle_outline</i>
          <input
            type="text"
            placeholder="Add State"
            onChange={e => {
              this.setState({ state_name: e.target.value });
            }}
          />
          <button type="text" onClick={() => this.newstate()}>
            ADD STATE
          </button>
        </AddState>
        {show_state &&
          show_state.state &&
          show_state.state.map((item, index) => {
            return (
              <States to={`/district/${item.id}`} key={index}>
                <h2>{item.id}</h2>
                <h2>{item.state_name}</h2>
              </States>
            );
          })}
      </Wrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    show_state: state.unsplash.show_state,
    add_state: state.unsplash.add_state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getState, addState }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(State);
