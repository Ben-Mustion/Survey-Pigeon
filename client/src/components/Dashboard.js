import React from 'react';
import SurveyList from './surveys/SurveyList';
import SurveyCreate from './surveys/SurveyCreate';

const Dashboard = () => {
  return (
    <div>
      <div className="ui clearing segment">
        <h3 className="ui left floated header">Surveys</h3>
        <div className="ui right floated header">
          <SurveyCreate />
        </div>
      </div>
      <SurveyList />
    </div>
  );
};

export default Dashboard;
