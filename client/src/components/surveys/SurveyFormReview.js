import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ name, label }) => {
    return (
      <div className="ui segment" key={name}>
        <h5 className="ui header">{label}</h5>
        <div className="sub header">{formValues[name]}</div>
        <div className="ui hidden divider"></div>
      </div>
    );
  });

  return (
    <div>
      <h4>Please confirm your entries</h4>
      <div className="ui segments">{reviewFields}</div>
      <div className="ui buttons">
        <button className="ui button labeled icon" onClick={onCancel}>
          <i className="chevron left icon"></i>
          Back
        </button>
        <div className="or"></div>
        <button
          onClick={() => submitSurvey(formValues, history)}
          className="ui right labeled icon button green"
        >
          Send Survey
          <i className="paper plane outline icon"></i>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formValues: state.form.surveyForm.values,
  };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
