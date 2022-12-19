
function Form() {
 
 
  return (
    <>  

    <form className='container' action='#'>
        <div className='header'>
          <h1>Signup</h1>
        </div>
        <label>Username</label>
        <div>
          <input type='text' placeholder='Enter your Name' name='name'/>
        </div>
        <label>Email</label>
        <div>
          <input type='email' placeholder='Enter your email' name='email'/>
        </div>
        <label>Password</label>
        <div>
          <input type='password' placeholder='Enter Your Password' name='password'/>
        </div>
        <div>
           <input type='submit' value='Submit'/>
        </div>

    </form>
    </>
  )
}

export default Form