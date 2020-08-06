import React, { Component } from 'react';
import diego from "../../images/DiegoCordoba.png";




class Home extends Component {
    render() {

        const iconSize ={
            fontSize: 30
        }
        return (
            <div>
                <div className= "container">
                    <div style={{marginTop:80}} className= "row">
                        <div className= "text-center col">
                        <img style={{marginTop:20}}src={diego} alt="Diego" />
                        </div>
                    </div>
                    <div className= "row">
                        <div className="col">
                            <p>
                            I am an experienced Analytical Linguist with a demonstrated history of working in the law enforcement field. Skilled in Real Estate Investing, Marketing Strategy, Team Management and Leadership, Intelligence, Translations, and Transcriptions. Fluent in English and Spanish. And Full-Stack (MERN) Developer.
                            </p>

                        </div>
                    </div>
                    <div className="row">
                                <div className="col d-flex justify-content-center">
                                    
                        <a style={iconSize} href="https://www.linkedin.com/in/diego-cordoba-01b20117b/"
                                className="fa fa-linkedin mx-2" target="_blank"></a>
                            <a style={iconSize} href="https://github.com/diegocordoba87/"
                                className="fa fa-github mx-2" target="_blank"></a>
                                </div>
                            </div>
                </div>
            </div>
                
   
        );
    }
}

export default Home;