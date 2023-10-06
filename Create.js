// import React, { useState } from 'react'

// const Create = (add) => {
//     const [NewD,setNewD]=useState({})
//     const [firstName, setfirstName] = useState("");
//     const [lastName, setlastName] = useState("");
//     const [email, setemail] = useState("");
//     const [contactNumber, setcontactNumber] = useState("");
//     const [age, setage] = useState("");
//     const [dob, setdob] = useState("");
//     const [salary, setsalary] = useState("");
//     const [address, setaddress] = useState("");
//     const handleSubmit = () => {
//       setNewD({ firstName: firstName, lastName: lastName,email: email,contactNumber: contactNumber,age:age,dob:dob,salary:salary,address:address })
//     };
    
//   return (
//     <form onSubmit={()=>handleSubmit()}>
        
//           <label htmlFor="firstName">
//           firstName
//           </label>
//           <input
//             type="text"
//             id="firstName"
//             placeholder="Enter your firstName"
//             value={firstName}
//             onChange={(e) => setfirstName(e.target.value)}
//             required
//           />
//         <br/>
//           <label htmlFor="lastname">
//           lastname
//           </label>
//           <input
//             type="text"
//             id="lastname"
//             placeholder="Enter your last-name"
//             value={lastName}
//             onChange={(e) => setlastName(e.target.value)}
//             required
//           />
//         <br/>
//         <label htmlFor="email">
//         email
//           </label>
//           <input
//             type="text"
//             id="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setemail(e.target.value)}
//             required
//           />
//           <br/>
//           <label htmlFor="contactNumber">
//           contactNumber
//           </label>
//           <input
//             type="text"
//             id="contactNumber"
//             placeholder="Enter your contactNumber"
//             value={contactNumber}
//             onChange={(e) => setcontactNumber(e.target.value)}
//             required
//           />
//           <br/>
//           <label htmlFor="age">
//           age
//           </label>
//           <input
//             type="text"
//             id="age"
//             placeholder="Enter your age"
//             value={age}
//             onChange={(e) => setage(e.target.value)}
//             required
//           />
//           <br/>
//           <label htmlFor="dob">
//           dob
//           </label>
//           <input
//             type="text"
//             id="dob"
//             placeholder="Enter your dob"
//             value={dob}
//             onChange={(e) => setdob(e.target.value)}
//             required
//           />
//           <br/>
//           <label htmlFor="salary">
//           salary
//           </label>
//           <input
//             type="text"
//             id="salary"
//             placeholder="salary"
//             value={salary}
//             onChange={(e) => setsalary(e.target.value)}
//             required
//           />
//           <br/>
//           <label htmlFor="address">
//           address
//           </label>
//           <input
//             type="text"
//             id="address"
//             placeholder="Enter your address"
//             value={address}
//             onChange={(e) => setaddress(e.target.value)}
//             required
//           />

//         <button>Submit</button>
//       </form>
//   )
// }

// export default Create;