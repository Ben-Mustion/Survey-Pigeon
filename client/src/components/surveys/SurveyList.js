import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import SurveyTally from './SurveyTally';
import SurveyDeleteModal from './SurveyDeleteModal';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  componentDidUpdate() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="ui fluid card" key={survey._id}>
          <div className="content">
            <div className="right floated meta">
              <SurveyDeleteModal
                surveyId={survey._id}
                surveyTitle={survey.title}
                modalName={'Delete'}
                modalIcon={'trash'}
              />
            </div>
            <div className="header">{survey.title}</div>
            <p className="description">{survey.body}</p>
            <div className="bottom aligned content">
              <div className="meta">
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </div>
            </div>
          </div>
          <div className="extra content">
            <SurveyTally
              className="left floated"
              votes={survey.yes}
              label={'Yes Responses'}
              icon={'smile outline'}
              color={'green'}
              align={'left'}
            />
            <SurveyTally
              votes={survey.no}
              label={'No Responses'}
              icon={'frown outline'}
              color={'red'}
              align={'right'}
            />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="column">{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
