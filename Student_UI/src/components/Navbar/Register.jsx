import React, { useState } from 'react'
import axiosInstance from '../../helper/axiosInstence'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import "../../components/global.css"
import STYLE from "./register.module.css"
const Register = () => {

        let navigate=useNavigate()
        let [studentData, setstudentData] = useState({
                userName: "",
                password: ""
        })
        let data = (e) => {
                setstudentData({ ...studentData, [e.target.name]: e.target.value })
        }
        let handleRegister = (e) => {

                e.preventDefault();
                try {
                        axiosInstance.post("/students", studentData)
                        navigate("/login")
                        toast.success(`user ${studentData.userName} registered successfully !`)
                }
                catch (err) {
                        console.log(err);
                        alert("Fill the details properly")
                }

        }

        return (
                <div className={STYLE.formholder} >
                        <form className={STYLE.form} action="" onSubmit={handleRegister}>
                                <h2>Register User</h2>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="username">Username </label>
                                        <input type="text" id='username' name='userName' onChange={data} />
                                </div>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="password">Password </label>
                                        <input type="password" id='password' name='password' onChange={data}/>
                                </div>
                                <button className={STYLE.register} >Register</button>
                        </form>
                </div>
        )
}

export default Register