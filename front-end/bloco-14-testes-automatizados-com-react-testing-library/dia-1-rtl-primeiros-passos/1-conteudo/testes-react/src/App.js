// App.js
import React from 'react';
import './App.css';
import ValidEmail from './components/ValidEmail';

class App extends React.Component {
  state = {
    email: '',
    saveEmail: '',
  }

  changeEmail = ({target: {value}}) =>  this.setState({ email: value })

  changeSaveEmail = (value) => this.setState({ saveEmail: value, email: '' })

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            type="email" 
            value={email} 
            onChange={ (event) => this.changeEmail(event)} 
          />
        </label>
        <input 
          id="btn-send" 
          type="button" 
          value="Enviar" 
          data-testid="id-send" 
          onClick={() => this.changeSaveEmail(email)} 
        />
        <input id="btn-back" type="button" value="Voltar" />
        <ValidEmail email={saveEmail} />
      </div>
    );
  }
}

export default App;