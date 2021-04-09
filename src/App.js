import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import About from "./modules/About";
import Contact from "./modules/Contact";
import Home from "./modules/Home";

function App() {
  return (
    <div className="container">
     <Router>
     <div className="row">
       <div className="col-12 bg-secondary display-4 text-white text-center p-4">Md Abdullah Fardus</div>
     </div>
     <div className="row">
       <div className="col-12">
        <ul className="nav">
          <li className="nav-item"><Link to="/" className="nav-link active">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
       </div>
     </div>
    </Router>
   </div>
  );
}

export default App;
