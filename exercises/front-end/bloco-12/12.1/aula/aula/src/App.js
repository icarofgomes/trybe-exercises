import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickFirstButton: 0,
      clickSecondButton: 0,
      clickThirdButton: 0
    };

    this.firstButton = this.firstButton.bind(this);
    this.secondButton = this.secondButton.bind(this);
    this.thirdButton = this.thirdButton.bind(this);
  }

  firstButton() { 
    this.setState((estadoAnterior, _props) => ({
      clickFirstButton: estadoAnterior.clickFirstButton + 1
    }), () => console.log(this.getBtnColor(this.state.clickFirstButton))
    )
  };

  secondButton() {
    this.setState((estadoAnterior, _props) => ({
      clickSecondButton: estadoAnterior.clickSecondButton + 1
    }), () => console.log(this.getBtnColor(this.state.clickSecondButton))
    )
  };

  thirdButton() {
    this.setState((estadoAnterior, _props) => ({
      clickThirdButton: estadoAnterior.clickThirdButton + 1
    }), () => console.log(this.getBtnColor(this.state.clickThirdButton))
    )
  };

  getBtnColor(num) {
    return num % 2 === 0 ? 'green' : 'red';    
  }
  
  render () {
    const {clickFirstButton, clickSecondButton, clickThirdButton} = this.state;
    return (
      <div className="App">
        <h1>Component State</h1>
        <div className="buttons-container">
          <button
            style={{background: this.getBtnColor(clickFirstButton)}}
            onClick={this.firstButton}
          >
            Primeiro Botão: {clickFirstButton}
          </button>
          <button
            style={{background: this.getBtnColor(clickSecondButton)}}
            onClick={this.secondButton}
          >
            Segundo Botão: {clickSecondButton}
          </button>
          <button
          style={{background: this.getBtnColor(clickThirdButton)}}
            onClick={this.thirdButton}
          >
            Terceiro Botão: {clickThirdButton}
          </button>
        </div>
      </div>
  );
  }
}

export default App;
