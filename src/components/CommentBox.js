import React from 'react';
import { connect } from 'react-redux';
import {
  saveComment
} from 'actions';

class CommentBox extends React.Component {
  state = {
    comment: ''
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={e => this.setState({ comment: e.target.value })} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps, {
  saveComment
})(CommentBox);