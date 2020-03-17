import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Names from './components/names';
class App extends Component {
  state = {
    name: "",
    list: []
  };
  onChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleClick = (event) => {
    this.setState({
      // if (name: "") {
      //   list: [...this.state.list]
      // }
      list: this.state.name === "" ? [...this.state.list] : [...this.state.list, this.state.name],
      // list: [...this.state.list, this.state.name],
      name: ""
    })
    console.log(this.state.list)
  }
  render() {
    return (
      <div>
      <input type="text" value={this.state.name} onChange={this.onChange}/>
      <div>{this.state.name}</div>
      <button onClick={() => this.handleClick(this.state.name)}>Click</button>
     <Names list={this.state.list} className="mylist"/>
      </div>)
  }
}
export default App;
