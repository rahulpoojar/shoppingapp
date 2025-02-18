import React, { Component } from "react";
import UserClass from "./UserClass.js";
import UserContext from "../utils/UserContext.js";
class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flex justify-center items-center min-h-screen min-w-full bg-gray-50 p-6">
        <UserClass />
        <h1>
          Logged In User : <UserContext.Consumer>
            {({loggedInUser})=><p>{loggedInUser}</p>}
          </UserContext.Consumer>
        </h1>
      </div>
    );
  }
}

export default About;
