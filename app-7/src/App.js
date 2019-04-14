import React, { Component } from "react";
// import ToDo from "./components/Todo"; // Imported to List.js
import NewTask from "./components/NewTask";
import List from "./components/List";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
      // input: "", moved to NewTask.js
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }
  // Moved to NewTask.js
  // handleInputChange(value) {
  //   this.setState({ input: value });
  // }

  handleAddTask(task) {
    this.setState({
      list: [...this.state.list, task]
    });
  }

  render() {
    // Moved to List.js
    // let list = this.state.list.map((element, index) => {
    //   return <ToDo key={index} task={element} />;
    // });
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        {/* Passing props to NewTask from NewTask.js and setting it to state, same with List */}
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
        {/* Everything below has been moved to NewTask.js and List.js */}
        {/* <div>
          <input
            value={this.state.input}
            placeholder="Enter new task"
            onChange={e => this.handleInputChange(e.target.value)}
          /> Moved to NewTask.js
          <button onClick={this.handleAddTask}>Add</button> Moved to NewTask.js
        </div>
        <br />
        {list} Moved to List.js */}
      </div>
    );
  }
}

export default App;
