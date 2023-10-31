import User_bank_details from "./User_Bank_Details.json";

const UserBankDetailDisplay = () => {
  return(
    <div>
      <h2>User Bank Details</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Account type</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {User_bank_details.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.account_type}</td>
              <td>{user.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
  }
export default UserBankDetailDisplay;