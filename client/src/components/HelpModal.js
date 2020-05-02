import React, { Component } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';

class HelpModal extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
        trigger={
          <Button color="blue" onClick={this.handleOpen} inverted>
            Help
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Modal.Content>
          <h5>How to Use</h5>
          <ul>1: Login with Google to start an account</ul>
          <ul>
            2: Add Credits - $1/Credit - ** Use 4242 4242 4242 4242 for test
            credit card or click the yellow "Test Mode" button on the top right
            of your screen for more info on Stripe Checkout **
          </ul>
          <ul>
            3: Create Survey and Send to Collect Feedback ** Yes/No Answers Only
            **
          </ul>
          <ul>
            4: Track User Feedback, Create New Surveys, Delete Old Surveys
          </ul>
        </Modal.Content>
        <Modal.Actions>
          <Button basic onClick={this.handleClose} inverted>
            <Icon name="left chevron" /> Back
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default HelpModal;
