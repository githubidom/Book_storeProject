import React from "react";
import { Link } from "react-router-dom";

const Booksection = ({ data }) => {
  return (
    <div className="d-flex w-full row-4 justify-content-center align-items-center">
      {data &&
        data.map((item) => (
          <div className="d-flex flex-wrap col-span-2 ">
            {item &&
              item.map((book) => {
                return (
                  <>
                    <div
                      className="card d-grid  justify-content-center align-items-center my-3 "
                      style={{
                        width: "220px",
                        height: "450px",
                        backgroundColor: "orange",
                        margin: "10px",
                        border: "2px solid white",
                        borderRadius: "10px",
                        boxShadow: "2px 2px 2px 2px white",
                        display: "flex-box",
                      }}
                    >
                      <img
                        style={{
                          width: "220px",
                          height: "230px",
                          border: "1px solid white",
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                        }}
                        src={book.image}
                      />
                      <div
                        className="text-green mx-2"
                        style={{ color: "blue", fontSize: "20px" }}
                      >
                        {book.bookname}
                      </div>
                      <h4 className="mx-2"> {book.Author}</h4>
                      <h4 className="text-red mx-2"> Rs. {book.price}</h4>

                      <div className="d-flex justify-content-around align-items-center">
                        <button className="btn btn-primary">
                          <Link
                            to={"/addbook"}
                            className="text-white textDecoration-none"
                            style={{ textDecoration: "none" }}
                          >
                            Update
                          </Link>
                        </button>
                        <button className="btn btn-danger">Delete</button>
                      </div>
                    </div>
                  
                  </>
                );
              })}
          </div>
        ))}
    </div>
  );
};
export default Booksection;
