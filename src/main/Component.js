import React from 'react';
import PropTypes from "prop-types";
import "./main.scss";

import Employees from '../components/employees';
import Reviewers from '../components/reviewers';




class Main extends React.Component {

 

  render() {


    return (
      <div className="main" >
          Main
          <Reviewers reviewersColection={this.props.reviewersColection}/> 
          {/* <Reviewers />  */}
          <Employees/> 
      </div>
    )
  }
}

Main.propTypes = {
  
};

export default Main;