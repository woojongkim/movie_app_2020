import React from "react";
import PropTypes from "prop-types";

function doSomething() {
  console.log("hello button");
}

class App extends React.Component {

  // constructor
  constructor(props){
    super(props);
    console.log("construct");
  }

  // mount
  componentDidMount(){
    console.log("component rendered");
  }

  // update
  componentDidUpdate(){
    console.log("component updated");
  }

  // unmount
  componentWillUnmount(){
    console.log("component will closed");
  }

  state = {
    count: 0,
  };
  render() {
    console.log("render");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }

  add = () => {
    console.log("add");
    this.setState(current => ({count:current.count+1}));
  };
  minus = () => {
    console.log("minus");
    this.setState(item => ({count:item.count-1}));
  };

  
}

export default App;
