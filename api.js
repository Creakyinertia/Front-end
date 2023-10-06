import axios from 'axios';
import React, { useState, useEffect } from 'react';
function ApiRequest() {
  const [users, setUsers] = useState([]);
   const [selectedUser, setSelectedUser] = useState([]);
const [deletedUsers, setDeletedUsers] = useState([]);
const url = 'https://jsonplaceholder.typicode.com/users'
  useEffect(() => {
      axios.get(url).then((res)=>{
        setUsers(res.data)
        // console.log(res.data)
      })
     }, []);
const handleSelectUser = (user) => {
    setSelectedUser(user);
  };
  const handleDeleteUser = (user) => {
    setDeletedUsers((prev) => [...prev, user]);
    if (selectedUser && user.id === selectedUser.id) {
      setSelectedUser(null);
    }
  };
  return (
    <div>
      <div>
        <h1>User Names</h1>
    <select onChange={(e) => {const selectedUserId = e.target.value;
        const selected = users.find((user) => user.id === +selectedUserId);
        // console.log(+selectedUserId)
    handleSelectUser(selected);}}>
<option>Select a user</option>
          {
          users.map((user) => (
            <option key={user.id} value={user.id}>{user.name}</option>))
          }
     </select>
      </div>
    {
 selectedUser && (
    <div>
    <p> <b>Selected User : </b>{selectedUser.name}</p>
    {console.log(selectedUser)}
          <button onClick={() =>handleDeleteUser(selectedUser)}>Delete User</button>
          {/* {
            selectedUser.map((v)=>{
                return (
                    <>
                    <p> <b>Selected User : </b>{v.name}</p>
          <button onClick={() =>handleDeleteUser(v)}>Delete User</button>
          </>
                )
            })
          } */}
        </div>
    )}
      <div className='deleted-container'>
        <h5>Deleted Names</h5>
        <ul>
          {deletedUsers.map((user) => (
            <li key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ApiRequest;