import User_details from '../components/userdetails.json'
const User_bank_details= () => {
  return (
    <div>
      <h2>User Details</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>FirstName</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {User_details.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default User_bank_details;

// Object-Oriented language:
// TypeScript supports JavaScript libraries:
// JavaScript is TypeScript: 
// TypeScript is portable:
// DOM manipulation
