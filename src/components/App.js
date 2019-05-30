import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';
import {
  changeAuth
} from 'actions';

class App extends React.Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>
          Sign Out
        </button>
      );
    }
    return (
      <button onClick={() => this.props.changeAuth(true)}>
        Sign In
      </button>
    );
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a CommentList</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" exact component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, {
  changeAuth
})(App);