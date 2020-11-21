import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "#fff" };
  }

  render() {
    return (
      <div style={{ background: this.state.color }} id="main">
    <div style={{ height: "75vh" }} className="landing-container">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
            Household chores just became a lot more fun!
            </h4>
            <p className="flow-text grey-text text-darken-1">
            Simply create a chore list and assign tasks to family members. Add rewards that your family will love for completing their chores and battle it out with a game of Connect4!
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "30px",
                  padding: "14px",
                  backgroundColor: "#42b984",
                  color: "white",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable accent-3"
              >Sign Up</Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "30px",
                  padding: "14px",
                  color: "#42b984",
                  border: "2px solid",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect hoverable white"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>

    );
  }
}
export default Landing;