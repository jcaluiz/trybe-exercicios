import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0,
      color: 'rgb(239, 239, 239)',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleColor = this.handleColor.bind(this)
  }

  handleColor() {
    if (this.state.numeroDeCliques % 2 !== 0) {
      this.setState({
        color: 'green'
      })
    } else {
      this.setState({
        color: 'rgb(239, 239, 239)'
      })
    }
  }

  handleClick() {
    this.setState((numeroDeCliquesAnterior, _props) => ({
      numeroDeCliques: numeroDeCliquesAnterior.numeroDeCliques + 1
    }))
    console.log(this.state.color);
    this.handleColor()
  }

  render() {
    return (
      <div>
        <button style={{ backgroundColor: this.state.color }} onClick={this.handleClick} >{this.state.numeroDeCliques}</button>
      </div>
    )
  }
}

export default App;
