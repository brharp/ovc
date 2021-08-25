import React from "react"

class Body extends React.Component {

  static SUMMARY = 'summary';

  render () {
    switch (this.props.format) {
      case Body.SUMMARY: return this.renderSummary();
      default: return this.renderProcessed();
    }
  }

  renderSummary() {
    return <div dangerouslySetInnerHTML={{__html: this.props.summary}}></div>
  }

  renderProcessed() {
    return <div dangerouslySetInnerHTML={{__html: this.props.processed}}></div>
  }

}

export default Body

