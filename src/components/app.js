import React, { Component } from 'react';

import CommentBox from './comment_box';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <CommentBox />
      </div>
    );
  }
}
