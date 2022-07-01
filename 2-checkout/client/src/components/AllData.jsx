import React from 'react';

let AllData = function ({allData, FourthFormNext}) {
  return (
    <div className='all-info'>
      <h2><b>User Info:</b></h2>
      <div>Name: {allData[0].name}</div>
      <span>Password: {allData[0].password}</span>
      <span> Email: {allData[0].email}</span>
      <h2><b>User Address:</b></h2>
      <span>Address: {allData[0].street_add}</span>
      <span>Apt: {allData[0].apartment}</span>
      <span>City: {allData[0].city}</span>
      <span>State: {allData[0].state}</span>
      <span>Zip Code: {allData[0].zip}</span>
      <h2><b>CC Info:</b></h2>
      <span>Credit Card Number: {allData[0].credit_card}</span>
      <span>CVV: {allData[0].cvv}</span>
      <span>Expiration: {allData[0].expiration}</span>
      <span>Billing Zip Code: {allData[0].cc_zip}</span>
      <button onClick={FourthFormNext}>PURCHASE</button>
    </div>
  )
}




export default AllData