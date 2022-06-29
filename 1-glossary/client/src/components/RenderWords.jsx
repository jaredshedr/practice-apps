import react from 'react'
import RenderWord from './RenderWord.jsx'

let RenderWords = function (props) {
  return (
    <div>
      <ol>
        {props.words.map((word, index) => <RenderWord word={word} key={index}/> )}
      </ol>
    </div>
  )
}


export default RenderWords;