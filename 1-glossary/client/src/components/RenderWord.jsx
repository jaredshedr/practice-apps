import react from "react";


let RenderWord = function ({word}) {
  return (
    <li>
      <div>{word.name}</div>
      <div>{word.type}</div>
      <div>{word.description}</div>
      <button>Edit</button>
      <button>Delete</button>
    </li>
  )
}


export default RenderWord