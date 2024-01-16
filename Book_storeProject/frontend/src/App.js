import React from "react";
import Navbar from "./components/Navbar";
import Book from "./Pages/Book";
import Home from "./Pages/Home";
import Addbook from "./Pages/Addbook";
import {
  BrowserRouter as Router,Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
//by the help of route we add that anyone click on bar whoose path is follows by the click command
function App() {
  return ( 
 <Router>
  <Navbar/>
  <Routes >
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/addbook' element={<Addbook/>}/>
    <Route exact path='/books' element={<Book/>}/>
  </Routes>
  <Footer/>
 </Router>

  )

 
}

export default App;
