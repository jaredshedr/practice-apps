import React from 'react'
import RenderWord from './RenderWord.jsx'

class RenderWords extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        name: '',
        type: '',
        desc: ''
      }

      this.editFormName = this.editFormName.bind(this);
      this.editFormType = this.editFormType.bind(this);
      this.editFormDesc = this.editFormDesc.bind(this);
  }


  editFormName (e) {
    this.setState({
      name: e.target.value
    })
  }
  editFormType (e) {
    this.setState({
      type: e.target.value
    })
  }
  editFormDesc (e) {
    this.setState({
      desc: e.target.value
    })
  }

  render () {
    if(this.props.editBool === true) {
      return (
        <div className='edit-field'>
          <h3>Edit the Word to your Liking</h3>
          <input onChange={this.editFormName} placeholder="Name"></input>
          <input onChange={this.editFormType} placeholder="Type"></input>
          <input onChange={this.editFormDesc} placeholder="Description"></input>
          <button onClick={(event) => this.props.editOneHelper(this.state.name, this.state.type, this.state.desc)}>Edit</button>
        </div>
      )
    } else {
      return (
        <div>
          <ol>
            {this.props.words.map((word, index) => <RenderWord word={word} key={index} deleteOne={this.props.deleteOne} editOne={this.props.editOne}/> )}
          </ol>
        </div>
      )
    }
  }
}




export default RenderWords;