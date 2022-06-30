import React from 'react'


class SecondForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(e) {
  event.preventDefault()

  this.props.SecondFormNext(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value, e.target[4].value, e.target[5].value)
}

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Shipping Info:</h3>
        <input placeholder="Street Adress"></input>
        <input placeholder="Apt/Floor"></input>
        <input placeholder="City"></input>
        <input placeholder="State"></input>
        <input placeholder="Zip Code"></input>
        <input placeholder="Phone Number"></input>
        <button type='submit'>Submit Shipping</button>
      </form>
    )
  }
}

export default SecondForm