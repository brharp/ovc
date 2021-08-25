import React from "react"

class Body extends React.Component {

  static SUMMARY = 'summary';

  render () {
    switch (this.props.format) {
      case Body.SUMMARY: return this.renderSummary(); break;
      default: return this.renderProcessed(); break;
    }
  }

  renderSummary() {
    return this.props.summary
  }

  renderProcessed() {
    return this.props.processed
  }

}

export default Body

