import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from '../Payments';

const SurveyCreate = ({ auth }) => {
  if (!auth) {
    return <div className="ui loading button"></div>;
  }
  if (auth.credits === 0) {
    return (
      <div className="ui button">
        <Payments text="Please Add Credits To Create New Survey" />
      </div>
    );
  } else {
    return (
      <Link to="/surveys/new" className="ui button">
        <i className="plus icon"></i>
        Create New Survey
      </Link>
    );
  }
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(SurveyCreate);
