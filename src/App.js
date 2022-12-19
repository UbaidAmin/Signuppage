import React from 'react'


function App() {
  return (
    <>
     <form className='container' action='#'>
        <div className='header'>
          <h1>Signup</h1>
        </div>
        <label>Username</label>
        <div>
          <input type='text' placeholder='Enter your Name' required/>
        </div>
        <label>Email</label>
        <div>
          <input type='email' placeholder='Enter your email' required/>
        </div>
        <label>First name</label>
        <div>
          <input type='text' placeholder='Enter your first name here' required/>
        </div>
        <label>Last name</label>
        <div>
          <input type='text' placeholder='Enter your last name' required/>
        </div>
        <label>Password</label>
        <div>
          <input type='password' placeholder='Enter Your Password' required/>
        </div>
        <div>
           <input type='submit' value='Submit'/>
        </div>

    </form>
    </>
    
  )
}

export default App