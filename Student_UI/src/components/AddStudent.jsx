import React, { useState } from 'react'
import axiosInstance from '../helper/axiosInstence'
import axios from 'axios'
import STYLE from "./AddStudent.module.css"
const AddStudent = () => {
    let token = sessionStorage.getItem("token")
    let [detailsData , setDetailsData] = useState({
        id: "",
        studentname: "",
        studentphone: "" ,
        studentemail: "",
        web: "",
        corejava: "" ,
        advancejava: "",
        apti: "",
        msql: "",
        percentage: "",
        total: "",
        result: ""
    }) 
    let data1 = (e)=>{
        setDetailsData({...detailsData, [e.target.name]:e.target.value})
    }

    let handleSubmit=(e) =>{
      e.preventDefault();
      try {
        axiosInstance.post("/students",detailsData)

        }
    catch(err){
      console.log(err);
      alert("Fill the details Properly");
    }}

  return (
    <div className={STYLE.studentFormholder} >
      <form className={STYLE.form} action="" onSubmit={handleSubmit}>
        <div className={STYLE.studentformitems}>
          <label htmlFor="">ID</label>
          <input  type="number" name="id" id="" onChange={data1} />
        </div>
        <div className={STYLE.studentformitems}>
          <label htmlFor="">Student Name:</label>
          <input  type="text" name='studentname' onChange={data1} />
        </div>
        <div className={STYLE.studentformitems}>
          <label htmlFor="">Student phone</label>
          <input type="number"  name="studentphone" id="" onChange={data1}/>
        </div>
        <div className={STYLE.studentformitems}>
          <label htmlFor="">Email:</label>
          <input  type="email" name='studentemail' onChange={data1} />
        </div>
        </form>


        <form className={STYLE.form1} action="" onSubmit={handleSubmit}>
        <h2 className={STYLE.h2}>Student Marks</h2>
        <div className={STYLE.studentformitems}>
          <label htmlFor="">Web</label>
          <input type="number" name="web" id="" onChange={data1} />
        </div>
        <div className={STYLE.studentformitems}>
          <label htmlFor="">Java</label>
          <input type="number"  name="corejava" id="" onChange={data1}/>
        </div>
        <div className={STYLE.studentformitems}>
        <label htmlFor="">Advance Java</label>
        <input type="number" name="advancejava" id="" onChange={data1}/>
        </div>
        <div className={STYLE.studentformitems}>
        <label htmlFor="">Apti</label>
        <input type="number" name="apti" id="" onChange={data1} />
        </div>
        <div className={STYLE.studentformitems}>
        <label htmlFor="">MySql</label>
        <input type="number"  name="msql" id="" onChange={data1}/>
        </div>
        <div className={STYLE.studentformitems}>
        <label htmlFor="">Percentage</label>
        <input type="number"  name="percentage" id="" onChange={data1}/>
        </div>
        <div className={STYLE.studentformitems}>
        <label htmlFor="">Total</label>
        <input type="number"  name="total" id="" onChange={data1}/>
        </div>
        <div className={STYLE.studentformitems}>
        <label htmlFor="">Result</label>
        <input type="text"  name="result" id="" onChange={data1}/>
        </div>
      

        <button className={STYLE.submit}>Submit</button>
      </form>
    </div>
  )
}

export default AddStudent;