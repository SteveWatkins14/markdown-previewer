import React, { Component } from 'react';

class Editor extends Component {

  render() {
    return (
      <div id="editor-div">
        <div className="toolbar">Editor</div>
          <textarea id="editor"
            value={this.props.input}
            onChange={this.props.updateInput}
          ></textarea>
      </div>
    );
  }
}

export default Editor;
