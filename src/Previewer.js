import React, { Component } from 'react';

class Previewer extends Component {
  render() {
    return (
      <div id="previewer-div">
        <div className="toolbar">Previewer</div>
          <div id="preview"
            dangerouslySetInnerHTML={this.props.markDown}>
          </div>
      </div>
    );
  }
}

export default Previewer;
