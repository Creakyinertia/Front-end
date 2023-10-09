import React from 'react';
function DeleteContainer({ deletedItems, onRestore,handlePermanent }) {
  return (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>firstName</th>
        <th>lastName</th>
        <th>Email</th>
        <th>phone</th>
        <th>Age</th>
        <th>dob</th>
        <th>salary</th>
        <th>address</th>
      </tr>
    </thead>
    <tbody>
      {deletedItems.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.contactNumber}</td>
          <td>{item.age}</td>
          <td>{item.dob}</td>
          <td>{item.salary}</td>
          <td>{item.address}</td>
          <td>
          <button onClick={() => onRestore(item)}>Restore</button>
          </td>
          <td>
          <button onClick={()=>handlePermanent(item)}>Delete</button>
          </td>
        </tr>
      ))
      
      }
    </tbody>
  </table>
  );
}
export default DeleteContainer;