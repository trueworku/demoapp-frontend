// import useState from react.
import React, {useState} from 'react'
import addEmployeecss from './addEmployee.css';

function AddEmployee(probs) {
  // declare state variables for each of the form fields
  const  [firstname, setfirstname] = useState("")
  const  [lastname, setlastname] = useState("")
  const  [email, setemail] = useState("")
  const  [password, setpassword] = useState("")
  // write a function to handle the form submission
  function handleSubmit(event) {
    event.preventDefault();
    // prepare the date to be sent to  the server
    const data={
      first_name: firstname,
      last_name: lastname,
      email:email,
      password: password
    };
    // send the data to the server
    const apiUrl = "http://3.144.82.201:4000/add-employee";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type":'application/json'},
      body: JSON.stringify(data),
    };
    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(res => {
        console.log(res);
      });
  }
 
  return (
    <div className='form-container'>
      <h1>Add Employee Page</h1><br/>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label><br/>
        <input type='text' id='firstname' name='firstName' value={firstname} onChange={e =>setfirstname (e.target.value) } /><br/>
        <label htmlFor="lastname">Last Name: </label><br/>
<input type='text' id='lastname' name='lastname' value={lastname} onChange={e => setlastname(e.target.value)} /><br/>

<label htmlFor="email">Email: </label><br/>
<input type='email' id='email' name='email' value={email} onChange={e => setemail(e.target.value)} /><br/>

<label htmlFor="password">Password: </label><br/>
<input type='password' id='password' name='password' value={password} onChange={e => setpassword(e.target.value)} /><br/>

   <button type="submit">Submit</button>
      </form>
      </div>
  )
}

export default AddEmployee;