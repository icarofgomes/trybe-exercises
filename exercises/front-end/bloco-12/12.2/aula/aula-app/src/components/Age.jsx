import React from 'react';

class Age extends React.Component {
  render() {
    const { value, handleState } = this.props;
    let error = undefined;
    if ( value < 0 || value > 99 ) {
      error = "Valor inválido";
    }
    return(
      <label htmlFor="age">Idade
        <input
          type="number"
          name="age"
          id="age"
          value={value}
          onChange={handleState}
        />
        <span className="error">{error ? error : ''}</span>
      </label>
    )
  }
}

export default Age;