import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.getTodos();
  }
  componentDidUpdate() {
    const divelements = document.querySelectorAll(".divelement");
    divelements.forEach((element) => {
      element.addEventListener("click", (e) => {
      const id=e.currentTarget.getAttribute('data-key')
      axios.get("http://127.0.0.1:8000/api/"+id);

        
      });
    });
  }
  

  getTodos() {
    axios
      .get("http://127.0.0.1:8000/api/")
      .then((res) => {
        this.setState({ todos: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const divStyle = {
      border: "1px solid black",
    };
    const Thename = {
      name: "divelement",
    };

    return (
      <div>
        {this.state.todos.map((item) => (
          <div key={item.id} style={divStyle} class={Thename.name} data-key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.body}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
