import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExpense } from '../Redux/Actions';

function Expenses() {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state); 

  const [Date, setDate] = useState('');
  const [Desc, setDesc] = useState('');
  const [Amt, setAmt] = useState();
  const [bal,setbal]=useState([]);
  const newdata=[]
  const addData = () => {
    const data = {
      date: Date,
      desc: Desc,
      amount:Number(Amt), 
      balance:Number(Amt)+Number(bal)
     
    };
    dispatch(addExpense(data)); 
    setDate('');
    setDesc('');
    setbal([Number(...Amt)])
    setAmt(0);
    console.log(bal)
     setbal(Number(bal)+Number(data.amount))
     
  }
console.log(expenses)
  return (
    <>
      <h1>Expense Tracker</h1>
      <input type='Date' value={Date} onChange={(e) => setDate(e.target.value)} />
      <input type='text' value={Desc} onChange={(e) => setDesc(e.target.value)} placeholder='Description' />
      <input type='number' value={Amt} onChange={(e) => setAmt(e.target.value)} placeholder='Amount' />
      <button onClick={addData}>Add Expense</button>
      <table border={1}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Spent</th>
          </tr>
        </thead>
        <tbody>
          {
        expenses?.map((expense, index) => (
            <tr key={index}>
              <td>{expense.date}</td>
              <td>{expense.desc}</td>
              <td>{expense.amount}</td>  
            <td>{expense.balance}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Expenses;
