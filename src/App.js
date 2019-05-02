import React, { Component } from 'react';
import Editor from './Editor';
import Previewer from './Previewer';
import defaultText from './default.js';

// import markedjs
let marked = require('marked');
marked.setOptions({
  // use github flavoured markdown
  gfm: true,
  // interpret carriage returns as line breaks
  breaks: true
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      // on load display default text
      input: defaultText,
      // convert default text into markdown
      markDown: {
        __html: marked(defaultText)
      }
    }

    // bind this in functions
    this.updateMarkDown = this.updateMarkDown.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  // called when input is updated
  updateMarkDown() {
    this.setState({
      markDown: {
        __html: marked(this.state.input)
      }
    });
  }

  // called when text in editor is updated by user
  updateInput(event) {
    this.setState({
      input: event.target.value,
    });
  }

  // on change of input field, call update markdown
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
