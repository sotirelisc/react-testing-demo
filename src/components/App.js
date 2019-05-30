import React from 'react';
import { Route } from 'react-router-dom';
import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/post" exact component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

export default App;