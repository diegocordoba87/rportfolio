import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
        <div className="container">
            <div  className="row justify-content-center">
            <div style={{marginTop: 100}} className="col-lg-7 col-xs-2"> 
        <ul className="list-group">
          <li className= "list-group-item"><a href="https://github.com/diegocordoba87/">Github</a></li>
          <li className= "list-group-item"><a href="https://www.linkedin.com/in/diego-cordoba-01b20117b/"> LinkedIn</a></li>
          <li className= "list-group-item">E-mail: diegocordoba87@gmail.com</li>
          <li className= "list-group-item">Cell: 770-401-6690</li>             
        </ul>
            </div>

            </div>
        </div>
        
        );
    }
}

export default Contact;