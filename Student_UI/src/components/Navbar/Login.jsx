import React, { useState } from 'react'
import axiosInstance from '../../helper/axiosInstence'
import STYLE from "./login.module.css"
//import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
//import "../../components/global.css"
const Login = () => {
  //let navigate=useNavigate()


  // let handleSubmit = (e)=>{
  //     e.preventDefault() ; 
  //     let payload = {
  //       firstname , 
  //       password
  //     }
  // }
  let [studentAuth , setStudentAuth]  = useState({
    userEmail : "" , 
    password : ""
  })
   let handleLogin = async  (e)=>{
           e.preventDefault()
          try{
            let payload = studentAuth ;
            let {data} = await axiosInstance.post("/students/login" , payload)
            sessionStorage.setItem("token" , data.token)
            sessionStorage.setItem("username" , studentAuth.userName)
            toast.success(`${studentAuth.userName} logged in ` )
            window.location.assign("/")
          }
          catch(err)
          {
            toast.error("invalid credentials")
          }
  }



  return (
    <div className={STYLE.formholder} >
                        <form className={STYLE.form} action="" onSubmit={handleLogin}>
                                <h2>Login User</h2>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="username">Username </label>
                                        <input type="text" id='username' name='userName' onChange={(e)=>{
                                          setStudentAuth({...studentAuth,[e.target.name]:e.target.value})
                                          }} />
                                </div>
                                <div className={STYLE.formitems}>
                                <input type= "password" id='password' name='password' onChange={(e)=>{
                  setStudentAuth({...studentAuth  , [e.target.name] : e.target.value})
                }} />

                                </div>
                                <button className={STYLE.login}>Login</button>
                        </form>
                </div>
  )
}

export default Login
