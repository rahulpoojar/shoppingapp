import React from "react";
import { GITHUB_API } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "dummy location",
        bio: "dummy bio",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(GITHUB_API);
    const response = await data.json();
    this.setState({ userInfo: response });
  }

  render() {
    const { login, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="flex flex-col items-center bg-white shadow-2xl p-12 rounded-lg max-w-lg w-full">
        <img
          src={avatar_url}
          alt="Avatar"
          className="w-48 h-48 rounded-full mb-8"
        />
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          {login}
        </h1>
        <h3 className="text-xl text-gray-600 text-center">{bio}</h3>
      </div>
    );
  }
}

export default UserClass;
