import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/home/Home"
import Contact from "./containers/contact/Contact"
import Projects from "./containers/projects/Projects"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import background from "./images/background.jpg";



function App() {
  return (
    <Router>
      <>
      <div style={{backgroundImage:`url(${background})`, backgroundSize: 'cover', paddingBottom:300, marginTop:10}}>
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={Home}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/contact" component={Contact}/>
      <Footer/>
      </div>
      </>
    </Router>
  );
}

export default App;
