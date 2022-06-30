import React from 'react'


class ThirdForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(e) {
  event.preventDefault()

  this.props.ThirdFormNext(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value)
}

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Credit Card Info:</h3>
        <input placeholder="Credit Card"></input>
        <input placeholder="Expiration Date"></input>
        <input placeholder="CVV"></input>
        <input placeholder="Billing Zip"></input>
        <button type='submit'>Submit Shipping</button>
      </form>
    )
  }
}

export default ThirdForm