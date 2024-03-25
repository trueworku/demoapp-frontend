import React, { useState } from 'react';


function Login() {
  // Declare state variables for the login form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [responseMessage, setResponseMessage] = useState(""); // Define state variable for response message

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Prepare login data
    const loginData = {
      email: email,
      password: password
    };
console.log(loginData);
    // Send login data to the server
    const apiUrl = "http://3.144.82.201:4000/login";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify(loginData),
    };

    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
        // Handle response from server
        setResponseMessage(data.message); // Update response message
        if (data.status === "success") {
          // Redirect to dashboard or perform other actions upon successful login
        } else {
          setError("Invalid email or password"); // Set error message
        }
      })
      .catch(error => {
        // Handle login error
        console.error("Login error:", error);
        setError("Error occurred during login"); // Set error message
      });
  }

  return (
    <div className='form-container'>
      <h2>{responseMessage}</h2>
      <h1>Login</h1><br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label><br />
        <input type='email' id='email' name='email' value={email} onChange={e => setEmail(e.target.value)} /><br />

        <label htmlFor="password">Password: </label><br />
        <input type='password' id='password' name='password' value={password} onChange={e => setPassword(e.target.value)} /><br />

        {error && <div className="error">{error}</div>} {/* Display error message if there is an error */}
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
