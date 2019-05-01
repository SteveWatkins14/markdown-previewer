import React, { Component } from 'react';
import Editor from './Editor';
import Previewer from './Previewer';
import defaultText from './default.js';

let marked = require('marked');
marked.setOptions({
  gfm: true,
  breaks: true
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      input: defaultText,
      markDown: {
        __html: marked(defaultText)
      }
    }

    this.updateMarkDown = this.updateMarkDown.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  updateMarkDown() {
    this.setState({
      markDown: {
        __html: marked(this.state.input)
      }
    });
  }

  updateInput(event) {
    this.setState({
      input: event.target.value,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.input !== this.state.input) {
      this.updateMarkDown();
    }
  }

  render() {
    return (
      <div>
        <div id="title">Markdown Previewer</div>
        <div id="main" className="container-fluid">
        <Editor
          input = {this.state.input}
          updateInput = {this.updateInput}
        />
      <Previewer
          markDown = {this.state.markDown}
        /> }
      </div>
      </div>
    );
  }
}

export default App;
