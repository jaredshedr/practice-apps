import React from "react";
import ReactDOM from "react-dom";
import FirstForm from './components/FirstForm.jsx'
const axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userCookie: JSON.stringify(document.cookie, undefined, "\t"),
      firstBtn: false,
      secondBtn: false
    }

    this.firstCheckout = this.firstCheckout.bind(this);
    this.firstFormNext = this.firstFormNext.bind(this);
  }

  firstCheckout () {
    this.setState({
      firstBtn: true
    })
  }

  firstFormNext (name, password, email) {

    let firstEntry = {name: name, email:email, password:password};
    axios.post('/checkout', firstEntry)
      .then((response) => {
        window.alert('Signed In!')
      })
      .catch((err) => {
        console.log('error in first form post', err)
        window.alert('Already Signed In!')
      })


    this.setState({
      secondBtn: true
    })
  }

  render () {

    if (this.state.secondBtn) {
      return (
        <div>
          <>second test</>
        </div>
      )
    }

    if (!this.state.firstBtn) {
      return (
        <div>
          <p>Your cart is prepared, Care to Checkout</p>
          <button onClick={this.firstCheckout}>Checkout Here</button>
          <p>

          </p>
        </div>
      )
    } else if (this.state.firstBtn) {
      return (
        <div>
          <FirstForm firstFormNext={this.firstFormNext}/>
        </div>
      )
    }
  }
}


ReactDOM.render(<App/>, document.getElementById("root"))


//<code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>