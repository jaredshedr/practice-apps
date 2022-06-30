import react from "react";


let RenderWord = function ({ word, deleteOne, editOne }) {
  return (
    <li className='list-item'>
      <div>{word.name}</div>
      <div> <i>Type: </i>{word.type}</div>
      <div> <i>Description: </i> { word.description}</div>
      <button onClick={(event) => editOne(word.name)}>Edit</button>
      <button onClick={(event) => deleteOne(word.name)}>Delete</button>
    </li>
  )
}


export default RenderWord


// on click of edit, change a piece of state to true, which renders out a new form with all fields.