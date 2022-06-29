import React from "react";
import ReactDOM from "react-dom";
import NewWord from './components/NewWord.jsx'
import RenderWords from './components/RenderWords.jsx'
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allWords: []
    }

    this.search = this.search.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.editOne = this.editOne.bind(this);
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

    let prompt = window.prompt()
    let adjust = {word: word, newDesc:prompt};

    axios.put('/words', adjust)
      .then((response) => {
        this.setState({
          allWords: response.data
        })
      })
      .catch(err => console.log('error adjusting description'))
  }


  render () {
    return (
      <div>
        <h2> Glossary </h2>
        <NewWord appSearch={this.search}/>
        <RenderWords words={this.state.allWords} deleteOne={this.deleteOne} editOne={this.editOne}/>
      </div>
    )
  }
}


ReactDOM.render( <App />, document.getElementById("root"));