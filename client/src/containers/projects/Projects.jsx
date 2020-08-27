import React, { Component } from 'react';
import EntertainMe from "../../images/EntertainMeMain.png"
import PasswordGenerator from "../../images/password_generator_main.png"
import WorkDayScheduler from "../../images/WorkDaySchedulerMain-1.png"
import FootPrints from "../../images/FootPrints.png"

class Projects extends Component {
    render() {
        return (
            <section className="container">
            <div className="row text-center">
              <div className="col-12 justify-content-center">
                <h2>Pojects</h2>
              </div>
            </div>
            <div className="row banner text-center">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <a href="https://diegocordoba87.github.io/password-generator/"
                  ><img style={{width: "50%"}}
                    src={PasswordGenerator}
                    alt="Password Generator main screen"
                  />
                  <h3 className="heading">Password Generator</h3></a>
                <a href="https://github.com/diegocordoba87/password-generator"
                  >See the code here</a>
              </div>
              <div className="col-ld-6 col-md-6 col-sm-12">
                <a href="https://diegocordoba87.github.io/WorkDayScheduler/"
                  ><img
                    src={WorkDayScheduler}
                    alt="Work Day Scheduler Main Screen"
                  />
                  <h3 className="heading">Workday Scheduler</h3></a>
                <a href="https://github.com/diegocordoba87/WorkDayScheduler"
                  >See the code here</a
                >
              </div>
            </div>
            <div className="row banner text-center">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <a href="https://mayastucky.github.io/gt-project-1/">
                    <img src={EntertainMe} alt="Entertain Me Application"
                  />
                  <h3 className="heading">EntertainMe App</h3></a>
                <a href="https://github.com/diegocordoba87/gt-project-1"
                  >See the code here</a
                >
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <a href="https://still-sierra-17214.herokuapp.com/"
                  ><img
                    src={FootPrints}
                    alt="Work Hard Play Hard"
                  />
                  <h3 className="heading">FootPrints</h3></a>
                <a href="https://github.com/diegocordoba87/footSteps"
                  >See the code here</a>
              </div>
            </div>
          </section>
        );
    }
}

export default Projects;