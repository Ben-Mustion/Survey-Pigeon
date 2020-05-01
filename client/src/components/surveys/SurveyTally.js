import React from 'react';

const SurveyTally = ({ votes, label, icon, color, align }) => {
  return (
    <span className={`${align} floated`}>
      <div className="ui mini statistics">
        <div className={`statistic ${color}`}>
          <div className="value">
            <i className={`${icon} icon`} style={{ marginRight: '10px' }}></i>
            {votes}
          </div>
          <div className="label">{label}</div>
        </div>
      </div>
    </span>
  );
};

export default SurveyTally;
