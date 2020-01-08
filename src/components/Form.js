import React, { Component } from "react";
import styled from "styled-components";
import { addData } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Wrapper = styled.div`
  background-color: #eceeef;
  margin: auto;
  width: 50%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  outline: none;
  h2 {
    margin: auto;
  }

  button {
    background-color: green;
    width: 20%;
    margin: auto;
    color: white;
  }
  input ,select{
    margin: 0px 69px 15px 37px;
  }
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Sex: "",
      dob: "",
      father_name: "",
      mother_name: "",
      district_id: 1,
      photo: "gtgtgt"
    };
  }

  newstate() {
    const { addData } = this.props;
    const {
      Name,
      Sex,
      dob,
      father_name,
      mother_name,
      district_id,
      photo
    } = this.state;

    addData(Name, Sex, dob, father_name, mother_name, district_id, photo);
  }
  render() {
    return (
      <Wrapper>
        <h2>ADD CHILD</h2>
        <input
          type="text"
          placeholder="Name"
          onChange={e => {
            this.setState({ Name: e.target.value });
          }}
        />
        <select
          onChange={e => {
            this.setState({ Sex: e.target.value });
          }}
        >
          <option>Gender</option>
          <option value="Female">Female</option>
          <option value="Male" >Male</option>
        </select>

        <input
          type="date"
          placeholder="Date of Birth"
          onChange={e => {
            this.setState({ dob: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Father's Name"
          onChange={e => {
            this.setState({ father_name: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Mother's Name"
          onChange={e => {
            this.setState({ mother_name: e.target.value });
          }}
        />
        <button type="button" onClick={() => this.newstate()}>
          SUBMIT
        </button>
      </Wrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    get_child: state.unsplash.get_child
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
