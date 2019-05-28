import React from 'react';
import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';

class App extends React.Component {
  render() {
    return (
      <div>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}

export default App;