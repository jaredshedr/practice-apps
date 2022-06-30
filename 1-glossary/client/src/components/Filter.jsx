import React from 'react'

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    }

    this.callFilter = this.callFilter.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  callFilter () {
    this.props.filter(this.state.filter);
  }

  inputChange (event) {
    this.setState({
      filter: event.target.value
    })
  }

  render () {
    return (
      <>
        <h3>Filter Words</h3>
        <input onChange={this.inputChange}></input>
        <button onClick={this.callFilter}>Filter By</button>
      </>
    )
  }
}


export default Filter