import React, { Component } from "react";
import styled from "styled-components";
import { getDistrict } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addDistrict } from "../actions/index";
import { throws } from "assert";

const States = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #449d44;
  border-radius: 8px;
  width: 25%;
  padding: 10px;
  margin: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const AddDistrict = styled.div`
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

class District extends Component {
  constructor(props) {
    super(props);
    this.state = {
      district_name: "",
    
    };
  }

  newstate() {
      const { addDistrict } = this.props;

      const { state_id,district_name} = this.state;
    addDistrict(state_id,district_name);
  }
  componentDidMount() {
      const { getDistrict } = this.props;
      this.setState({ state_id: this.props.match.params.id })
    getDistrict(this.props.match.params.id);
  }
  render() {
    const { show_district } = this.props;
    return (
      <Wrapper>
        <AddDistrict>
          <i class="material-icons">add_circle_outline</i>
          <input
            type="text"
            placeholder="Add District"
            onChange={e => {
              this.setState({ district_name: e.target.value });
            }}
          />
          <button type="text" onClick={() => this.newstate()}>
            ADD DISTRICT
          </button>
        </AddDistrict>
        {show_district &&
          show_district.district &&
          show_district.district.map((item, index) => {
            return (
              <States key={index}>
                <h2>{item.id}</h2>
                <h2>{item.district_name}</h2>
              </States>
            );
          })}
      </Wrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    show_district: state.unsplash.show_district
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getDistrict, addDistrict }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(District);
