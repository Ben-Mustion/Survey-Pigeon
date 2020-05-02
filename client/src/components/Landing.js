import React from 'react';

const Landing = () => {
  return (
    <div className="ui segments">
      <div
        className="ui segment center aligned"
        style={{ marginBottom: '20px' }}
      >
        <h1>Survey Pigeon</h1>
        <h3>Create Surveys to Collect User Feedback and Track Results</h3>
      </div>

      <div className="ui segment left aligned">
        <h5>How to Use</h5>
        <ul>1: Login with Google to start an account</ul>
        <ul>
          2: Add Credits - $1/Credit - ** Use 4242 4242 4242 4242 for test
          credit card or click the yellow "Test Mode" button on the top right of
          your screen for more info on Stripe Checkout **
        </ul>
        <ul>
          3: Create Survey and Send to Collect Feedback ** Yes/No Answers Only
          **
        </ul>
        <ul>4: Track User Feedback, Create New Surveys, Delete Old Surveys</ul>
      </div>
    </div>
  );
};

export default Landing;
