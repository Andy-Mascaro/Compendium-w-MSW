import React from 'react'

export default function OrderList({ setOrder }) {
  return (
    <div>
      <select onChange = {(e) => setOrder(e.target.value)}>
        <option value='Alive'>Alive</option> 
        <option value='Dead'>Dead</option> 
        <option value='unknown'>Unknown</option>   
      </select>
    
    </div>
  );
}
