import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function Addbook() {
  const [data, setdata] = useState({bookname:"",Author:"",Description:"",image:"",price:""})
  const submit=async(e)=>{
  //  e.preventDefault()
    await axios.post("http://localhost:1000/api/v1/add",data).then((res)=>console.log(res),
    setdata({bookname:"",Author:"",Description:"",image:"",price:""}))
  }
  
   const change =(e)=>{
   const {name,value}= e.target;
   setdata({...data,[name]:value})
   console.log(data);
 
  }
  return (
    <div className="bg-dark text-white" style={{ height: "91.5vh" }}>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Book name
          </label>
          <input
            type="string"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter the book name"
            name="bookname"
            value={data.bookname}
            onChange={change}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Author name
          </label>
          <input
            type="string"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter the Author name"
            name="Author"
            value={data.Author}
            onChange={change}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            role="3"
            id="exampleFormControlInput1"
            placeholder="Description"
            name="Description"
            value={data.Description}
            onChange={change}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            role="3"
            id="exampleFormControlInput1"
            placeholder="Enter the url of the image"
            name="image"
            value={data.image}
            onChange={change}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter the price"
            name="price"
            value={data.price}
            onChange={change}
          />
        </div>

        <button className="btn btn-success" onClick={submit}>Submit</button>
      </div>
    </div>
  );
}

export default Addbook;
