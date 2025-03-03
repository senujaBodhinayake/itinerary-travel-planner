import React, { useState } from 'react'
import './Login.css'


const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]= useState('');
    const [isSignup,setIsSignup]=useState(false);
    

    const handlesubmit= (e) =>{
        e.preventDefault();
        if(isSignup)
        {
            if(name && email && password)
            {alert("Registration successful!");}
            else{
                alert("please fill all fields.");
            }
        }
        else{
            if(email==="user@example.com"&&password==="password")
            {alert("Login successful!")}
        }
        
    }

        
        
    
  return (
    <div className='login'>
    <div className='login-container'>
        <h2>{isSignup ? 'Sign Up':'Login'}</h2>
        <form onSubmit={handlesubmit}>
            {isSignup&&(
                <input
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required/>
            )}
            <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required />
          <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
       </form>
        <p>
        {isSignup ? "Already have an account? " : "Don't have an account? "}
        <span 
          onClick={() => setIsSignup(!isSignup)} 
          style={{ color: 'blue', cursor: 'pointer' }}
        >
          {isSignup ? 'Login' : 'Sign Up'}
        </span>
      </p>

        
      
    </div>
    </div>
  )
}

export default Login
