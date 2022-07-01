import React from 'react';


class FirstForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: ''
    }

    this.nameChange = this.nameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
  }

  nameChange (e) {
    this.setState({
      name: e.target.value
    })
  }

  passwordChange (e) {
    this.setState({
      password: e.target.value
    })
  }

  emailChange (e) {
    this.setState({
      email: e.target.value
    })
  }


  render () {
    return (
      <div>
        <h2>Sign In</h2>
        <input onChange={this.nameChange} placeholder="Name"></input>
        <input onChange={this.emailChange} placeholder="Email"></input>
        <input onChange={this.passwordChange} placeholder="Password"></input>
        <button onClick={(event) => this.props.firstFormNext(this.state.name, this.state.password, this.state.email)}>Next</button>
      </div>
    )
  }
}

export default FirstForm