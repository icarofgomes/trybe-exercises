import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
    }
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value})
  }

  render() {
    return(
      <div className="App">
        <h1>Teste de Inputs</h1>
        <p>
          Nome:
          <input
            onChange={(e) => this.handleInput(e)}
            name='nome'
            data-testid='input-name'
            value={this.state.nome}
          />
        </p>
        <p>
          Email:
          <input
            onChange={(e) => this.handleInput(e)}
            name='email'
            data-testid='input-email'
            value={this.state.email}
          />
        </p>
      </div>
    )
  }
}

export default App;
