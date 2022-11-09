import React, { useState } from 'react'
import { useForm } from "react-hook-form";


const Form = () => {
  const [password,npassword]=useState()
  const [cpassword,copassword]=useState()
  const [unshow,show]=useState(true)
  
    const { register, handleSubmit, formState: { errors } } = useForm();
const handleRegistration = (data) =>
{
    data.preventDefault()
    console.log("Data");

}
const pvlaidate=(e)=>{
  copassword(e.target.value)
  if (password!==copassword)
  {
    console.log(password)
    console.log(cpassword)
    console.log("Password mishmathch")
    alert("password not mathc")
  }
  
  show(true)
}
    
  return (
    <div className='d-flex justify-content-center main'>
      
    <div className="signup-box my-5">
      <h1>Sign Up</h1>
      <h4>It's free and only takes a minute</h4>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <label>First Name</label>
        <input type="text" id="fname" {...register('fname', { required: true, maxLength: 30 })} />
      {errors.fname && errors.name.type === "required" && <span>First Name is required</span>}
      {errors.fname && errors.name.type === "maxLength" && <span>Max length exceeded</span> }
        
        
        <label>Last Name</label>
        <input type="text" id="name" {...register('name', { required: true, maxLength: 30 })} />
      {errors.name && errors.name.type === "required" && <span>This is required</span>}
      {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span> }

        <label htmlFor="">
          Email
        </label>
        <input type="email"  name="email" {...register('email', { required: true, maxLength: 30,
        pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format"
          } })}
     />
         {errors.email && <span role="alert">{errors.email.message} <span>email is required</span></span>}
       

        <label>Password</label>
       <input type="password" id="p1" value={password} {...register('password', { required: true, minLength:8 })}
       onChange={e => {
        npassword(e.target.value)
    
}}
       
       
        />
      {errors.password && errors.password.type === "required" && <span>password is required</span>
      
      
      }
      {errors.password && errors.password.type === "minLength" && <span>Minimum 8 characters</span> }
      
     
      
        
        {/* confirm password */}
        <label>Confirm Password</label>

        
       
       <input type="password" id="p2" value={cpassword}   {...register('password', { required: true, maxLength: 30 })}
      onChange={e => {
       pvlaidate(e.target.value)
    
}}
/>

{/* <div>
{
  
  unshow  && <p>password not match</p>

}
</div> */}




       
      {errors.password && errors.password.type === "required" && <span>password is required</span>}
      {errors.password && errors.password.type === "maxLength" && <span>Max length exceeded</span> }
      <div className='text-center'>  <button type='submit' className='mt-3  sub'>Submit</button></div>

     
     </form>
   
    </div>
   
  

      

    </div>
  )
}

export default Form
