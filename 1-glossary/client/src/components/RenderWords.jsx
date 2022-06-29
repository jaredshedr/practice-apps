import react from 'react'
import RenderWord from './RenderWord.jsx'

let RenderWords = function (props) {
  return (
    <div>
      <ol>
        {props.words.map((word, index) => <RenderWord word={word} key={index} deleteOne={props.deleteOne} editOne={props.editOne}/> )}
      </ol>
    </div>
  )
}


export default RenderWords;