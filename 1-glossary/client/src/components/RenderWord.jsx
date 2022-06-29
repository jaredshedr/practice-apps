import react from "react";


let RenderWord = function ({ word, deleteOne, editOne }) {
  return (
    <li>
      <div>{word.name}</div>
      <div>{word.type}</div>
      <div>{word.description}</div>
      <button onClick={(event) => editOne(word.name)}>Edit</button>
      <button onClick={(event) => deleteOne(word.name)}>Delete</button>
    </li>
  )
}


export default RenderWord