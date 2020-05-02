import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class ConfirmModal extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleDelete = () => {
    this.props.deleteSurvey(this.props.surveyId);
    //this.props.fetchSurveys();
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <Modal
        trigger={
          <Button color="red" onClick={this.handleOpen} inverted>
            <Icon name={this.props.modalIcon} /> {this.props.modalName}
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Header icon="trash" content="Delete Survey" />
        <Modal.Content>
          <h3>
            Are you sure you want to delete the survey: {this.props.surveyTitle}
          </h3>
          <h4>You cannot recover it once deleted</h4>
        </Modal.Content>
        <Modal.Actions>
          <Button basic onClick={this.handleClose} inverted>
            <Icon name="left chevron" /> No
          </Button>
          <Button color="red" onClick={this.handleDelete} inverted>
            <Icon name="remove" /> Delete
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default connect(null, actions)(ConfirmModal);
