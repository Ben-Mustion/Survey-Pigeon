import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import HelpModal from './HelpModal';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div className="ui google plus button">
            <a style={{ color: 'white' }} href="/auth/google">
              Login With Google
            </a>
            <i style={{ paddingLeft: '10px' }} className="google icon"></i>
          </div>
        );
      default:
        return [
          <div key="1" style={{ margin: '10px' }}>
            Credits: {this.props.auth.credits}
          </div>,

          <div key="2" className="ui button green">
            <Payments text="Add Credits" />
          </div>,
          <div key="3" style={{ marginLeft: '10px' }}>
            <HelpModal />
          </div>,
          <div
            key="4"
            className="negative ui button"
            style={{ marginLeft: '10px' }}
          >
            <a style={{ color: 'white' }} href="/api/logout">
              Logout
            </a>
          </div>,
        ];
    }
  }

  render() {
    return (
      <div className="ui menu" style={{ background: '#dbfff3' }}>
        <h2 className="menu header">
          <Link
            className="header item"
            to={this.props.auth ? '/surveys' : '/'}
            style={{ color: 'black' }}
          >
            Survey Pigeon
            <i
              className="earlybirds outline icon"
              style={{ marginLeft: '10px' }}
            ></i>
          </Link>
        </h2>
        <div className="item right aligned">{this.renderContent()}</div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
