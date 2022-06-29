import react from "react";


let RenderWord = function ({ word, deleteOne }) {
  return (
    <li>
      <div>{word.name}</div>
      <div>{word.type}</div>
      <div>{word.description}</div>
      <button>Edit</button>
      <button onClick={(event) => deleteOne(word.name)}>Delete</button>
    </li>
  )
}


export default RenderWord