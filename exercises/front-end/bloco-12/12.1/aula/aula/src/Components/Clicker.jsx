import React from 'react';

class Clicker extends React.Component {
  render() {
    const handleClick = (value) => console.log(`Clicou no botão! ${value}`);
    return (
      <button onClick={handleClick(this.props.value)}>Clique aqui!</button>
    )
  }
}

export default Clicker;