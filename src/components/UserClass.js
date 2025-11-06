import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 90,
    };

  }

  componentDidMount(){
  }

  render() {
    const { name, city, school } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="userClass">
        <h1>{count}</h1>
        <h1>{count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count + 100,
            });
          }}
        >
          Click Here
        </button>

        <h2>Name: {name}</h2>
        <h3>City: {city}</h3>
        <h3>School: {school}</h3>
      </div>
    );
  }
}

export default UserClass;
