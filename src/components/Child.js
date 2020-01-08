import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getChild } from "../actions/index";
import { Link } from "react-router-dom";
import { addData } from "../actions/index";

const Wrapper = styled.div`
  margin-top: 20px;
  border: 1px solid black;
  display: flex;
  h3 {
    margin-right: 25px;
  }
`;
const Table = styled.table`
  tr {
    text-align: center;
    td,
    th {
      padding: 10px;
    }
  }
`;

class Child extends Component {
  componentDidMount() {
    const { getChild } = this.props;
    getChild();
  }

  render() {
    const { get_child } = this.props;
    return (
      <Wrapper>
        <Table>
          <tr>
            <th>Name</th>
            <th>Sex</th>
            <th>Date of Birth</th>
            <th>Fathers Name</th>
            <th>Mothers Name</th>
            <th>Action</th>
          </tr>

          {get_child &&
            get_child.child_profile &&
            get_child.child_profile.map((item, index) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.sex}</td>
                  <td>{item.dob}</td>
                  <td>{item.father_name}</td>
                  <td>{item.mother_name}</td>
                  <td>
                    <Link to={`/info/${item.id}`}>View</Link>
                  </td>
                </tr>
              );
            })}
        </Table>
        <Link to="/form">Add Child</Link>
      </Wrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    get_child: state.unsplash.get_child,
    add_data: state.unsplash.add_data
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getChild, addData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Child);
