import React from "react"

class View extends React.Component {
  render () {
    const header = this.props.header
    const footer = this.props.footer
    const content = this.props.content
    return <div className={this.props.className}>
        { header && <header>{ header }</header> }
        { content }
        { footer && <footer>{ footer }</footer> }
      </div>
  }
}

class Unformatted extends React.Component {
  render () {
    const title = this.props.title
    const rows = this.props.rows
    const rowClasses = this.props.rowClasses
    return <>
      { title && <h3>{ title }</h3> }
      {
        rows.map((row, index) =>
          <div key={index} className={ rowClasses }>
            { row }
          </div>
        )
      }
    </>
  }
}

class Field extends React.Component {
  render () {
    const classes = this.props.className
    const content = this.props.content
    return <div className={classes}>
      { content }
    </div>
  }
}

class Statistics extends React.Component {
  render () {
    return <View className="row" content={this.renderContent(this.props.children)} />
  }
  renderContent (content) {
    return <Unformatted rows={this.renderRows(content)} rowClasses="col-md-4"/>
  }
  renderRows (rows) {
    return rows.map((row, index) => this.renderFields(row, index))
  }
  renderFields (row) {
    return <>
      <Field className="display-2 text-center" content={row.figure} />
      <Field className="display-4 text-center" content={row.title} />
    </> 
  }
}

export default Statistics

