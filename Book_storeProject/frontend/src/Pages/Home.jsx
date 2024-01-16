import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Book from "./Book";
function Home() {
  const Image = require("../images/girl.jpg");
  return (
    <>
      <div className="Home-page bg-dark w-full justify-content-center align-item-center text-white container-fluid" style={{borderTop:"1px solid white"}}>
        <div className="row">
          <div
            className="col-lg-6 d-flex justify-content-center align-item-start align-item-center flex-column "
            style={{
              height: "91.5vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className=" book text-3xl h-60 " style={{ fontSize: "60px" }}>
              Book store
            </h1>
            <h3 style={{ fontSize: "40px" }}>for you</h3>
            <p style={{ color: "silver" }}>checkout new books</p>
            <Link
              className="w-5 font-bold text-sm rounded-lg h-1 text-white bg-dark justify-content-center  align-item-center "
              style={{ width: "100px", border: "3px solid white", textDecoration:"none", justifyContent:"center", alignItems:"center"}} to="/books"
            >
            View Book
            </Link>
          </div>
          <div
            className="col-lg-6 d-flex justify-content-center align-item-center flex-column "
            style={{ height: "91.5vh" }}
          >
            <img className="image" style={{boxShadow:"10px 10px 10px 10px lightblue", border:"2px solid white"}} src={Image} alt="/" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
