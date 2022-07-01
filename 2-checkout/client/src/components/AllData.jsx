import React from 'react';

let AllData = function (props) {
  console.log(props.allData);
  return (
    <div className='all-info'>
      <h2><b>User Info:</b></h2>
      <div>{props.allData[0].name}</div>
    </div>
  )
}




export default AllData