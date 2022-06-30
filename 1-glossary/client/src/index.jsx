import React from "react";
import ReactDOM from "react-dom";
import NewWord from './components/NewWord.jsx'
import RenderWords from './components/RenderWords.jsx'
import ManualAdd from './components/ManualAdd.jsx'
import Filter from './components/Filter.jsx'

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allWords: [],
      filtered: [],
      filterBool: false,
      editBool: false,
      editWord: ''
    }

    this.search = this.search.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.editOne = this.editOne.bind(this);
    this.manualAddOnClick = this.manualAddOnClick.bind(this);
    this.filter = this.filter.bind(this);
    this.editOneHelper = this.editOneHelper.bind(this);
    this.backToDict = this.backToDict.bind(this);
    this.filterBack = this.filterBack.bind(this);
  }

  componentDidMount () {
    axios.get('/words')
      .then((response) => {
        this.setState({
          allWords: response.data
        })
      })
      .catch((err) => {
        console.log('error getting all words', err)
      })
  }

  search (word) {
    console.log('in app', word);
    let tempObj = {newWord: word}
    axios.post('/words', tempObj)
      .then((response) => {
        this.setState({
          allWords: [response.data]
        })
      })
      .catch((err) => {
        console.log('error posting word', err)
        window.alert('no word found')
      })
  }

  deleteOne (word) {
    console.log('clicked button', word);
    axios.delete('/words', { data: {newWord: word} })
      .then((response) => {
        this.setState({
          allWords: response.data
        })
      })
      .catch(err => console.log('error deleting', err))
  }

  editOne (word) {

    this.setState({
      editBool: true,
      editWord: word
    })
  }

  editOneHelper(name, type, desc) {

    console.log('ive been clicked', name, type, desc);

    let adjust = {word: this.state.editWord, newName:name, type:type, desc: desc};

    axios.put('/words', adjust)
      .then((response) => {
        this.setState({
          allWords: response.data,
          editBool: false,
          editWord: ''
        })
      })
      .catch(err => console.log('error adjusting description'))
  }

  manualAddOnClick (name, description) {

    let makeStuffUp = {newName: name, newDesc: description}
    axios.post('/words/fake', makeStuffUp)
      .then((response) => {
        this.setState({
          allWords: response.data
        })
      })
      .catch((err) => {console.log('error making up words', err)})
  }

  filter (filteredWord) {
    let filteredArray = [];
    let testerArray = this.state.allWords;
    for (let word of testerArray) {
      let lowerFilter = filteredWord.toLowerCase()
      if (word.name.toLowerCase().match([lowerFilter])) {
        filteredArray.push(word);
      }
    }

    this.setState({
      filtered: filteredArray,
      filterBool: true
    })
  }

  backToDict () {
    console.log('back button')
    axios.get('/words')
    .then((response) => {
      this.setState({
        allWords: response.data
      })
    })
    .catch((err) => {
      console.log('error getting all words', err)
    })
  }

  filterBack () {
    this.setState({
      filterBool: false
    })
  }


  render () {
    return (
      <div>
        <h2> Glossary </h2>
        <NewWord appSearch={this.search} backToDict={this.backToDict}/>
        <ManualAdd manual={this.manualAddOnClick}/>
        <Filter filter={this.filter} filterBack={this.filterBack}/>
        <RenderWords editOneHelper={this.editOneHelper} editBool={this.state.editBool} words={ this.state.filterBool === false ? this.state.allWords : this.state.filtered } deleteOne={this.deleteOne} editOne={this.editOne}/>
      </div>
    )
  }
}


ReactDOM.render( <App />, document.getElementById("root"));



 // filter the current words by that text
    // set a new piece of state to that remaining array
    // turn a state boolean to true
    // if the state boolean is true use conditional rendering on renderwords props