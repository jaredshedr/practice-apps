import React from 'react'

class ManualAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: ''
    }

    this.nameUpdater = this.nameUpdater.bind(this);
    this.descUpdater = this.descUpdater.bind(this);
    this.submitNew = this.submitNew.bind(this);
  }

  nameUpdater (event) {
    this.setState({
      name: event.target.value
    })
  }

  descUpdater (event) {
    this.setState({
      description: event.target.value
    })
  }

  submitNew () {
    event.preventDefault();

    this.props.manual(this.state.name, this.state.description);
  }


  render () {
    return (
      <form>
        <input onChange={this.nameUpdater} placeholder="Name of Word"></input>
        <input onChange={this.descUpdater} placeholder="Description"></input>
        <button onClick={this.submitNew}> Make up a Word</button>
      </form>
    )
  }
}




export default ManualAdd