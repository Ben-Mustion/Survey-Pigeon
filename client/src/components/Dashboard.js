import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div>
      <div className="ui clearing segment">
        <h3 className="ui left floated header">Surveys</h3>
        <div className="ui right floated header">
          <Link to="/surveys/new" className="ui button">
            <i className="plus icon"></i>
            Create New Survey
          </Link>
        </div>
      </div>
      <SurveyList />
    </div>
  );
};

export default Dashboard;
