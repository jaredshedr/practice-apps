import React from 'react'

class NewWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ''
    }

    this.submit = this.submit.bind(this);
    this.search = this.search.bind(this);
  }

  search (event) {
    this.setState({
      word: event.target.value
    })
  }

  submit () {
    this.props.appSearch(this.state.word);
  }



  render () {
    return (
      <div>
        <h3>Check the Dictionary</h3>
        <input onChange={this.search}></input>
        <button onClick={this.submit}>Add Word</button>
        <button onClick={this.props.backToDict}>Back to Main Dictionary</button>
      </div>
    )
  }
}


export default NewWord