import React from "react";
import ReactDOM from "react-dom";
import FirstForm from './components/FirstForm.jsx'
import SecondForm from './components/SecondForm.jsx'
import ThirdForm from './components/ThirdForm.jsx'
const axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userCookie: JSON.stringify(document.cookie, undefined, "\t"),
      firstBtn: false,
      secondBtn: false,
      thirdBtn: false,
      fourthBtn: false
    }

    this.firstCheckout = this.firstCheckout.bind(this);
    this.firstFormNext = this.firstFormNext.bind(this);
    this.SecondFormNext = this.SecondFormNext.bind(this);
    this.ThirdFormNext = this.ThirdFormNext.bind(this);
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

  SecondFormNext (address, apt, city, state, zip, phone) {

    let tempSecond = {address: address, apt: apt, city: city, state: state, zip: zip, phone: phone};

    axios.post('/checkout/second', tempSecond)
      .then((response) => {

      })
      .catch((err) => {
        console.log('error submitting second form', err);
      })

      this.setState({
        thirdBtn: true
      })
  }

  ThirdFormNext (cc, expiration, cvv, billingZip) {

    let tempThird = {cc: cc, expiration: expiration, cvv: cvv, billingZip: billingZip}

    axios.post('/checkout/third', tempThird)
      .then((response) => {

      })
      .catch((err) => {
        console.log('err posting third', err);
      })

    this.setState({
      fourthBtn: true
    })
  }

  render () {

    if (this.state.fourthBtn) {
      return (
        <div>
          <>This will be a summary page of all the info</>
        </div>
      )
    }

    if (this.state.thirdBtn) {
      return (
        <div>
          <ThirdForm ThirdFormNext={this.ThirdFormNext}/>
        </div>
      )
    }

    if (this.state.secondBtn) {
      return (
        <div>
          <SecondForm SecondFormNext={this.SecondFormNext}/>
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