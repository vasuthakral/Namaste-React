import UserClass from "./UserClass";
import React from "react";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: "Dummy",
        id: "Dummy",
      },
    };
  }

  async componentDidMount() {
    const fetchData = await fetch("https://api.github.com/users/vasuthakral");
    const data = await fetchData.json();

    console.log(data);

    this.setState({ userInfo: data });
  }

  render() {
    const { login, id } = this.state;
    return (
      <div>
        <h1>{login}</h1>
        <h2>{id}</h2>
        <UserClass
          name={"Vasu"}
          city={"Saharanpur"}
          school={"Rainbow" + " School"}
        />
      </div>
    );
  }
}

export default AboutUs;
