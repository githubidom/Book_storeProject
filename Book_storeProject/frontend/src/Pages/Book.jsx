import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Booksection from "../components/Booksection";

function Book() {
  const [Data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("http://localhost:1000/api/v1/getbooks")
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetch();
  });

  return (
    <div className="bg-dark   " style={{ minHeight: "91.5vh" }}>
      <div className="bg-dark  d-flex bg-dark justify-content-center  align-item-center text-white  ">
        <h1> Book section </h1>
      </div>
   {    Data ? (<div className="text-white  "> 
   <Booksection data={Data} /> 
   </div> ):(<div className="text-white  "> ......Loading please wait !</div>)}


{/*       
      */}
    </div>
  );
}

export default Book;
