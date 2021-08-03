import React from 'react';

class FullName extends React.Component {
  render () {
    const { value, handleState } = this.props;
    let error = undefined;
    if (value.length > 45 || (value !== '' && value.length < 5)) {
      error = "Tamanho inválido!";
    }
    return (
      <label htmlFor="fullName">Nome completo
        <input
          type="text"
          name="fullName"
          id="fullName"
          value={value}
          onChange={handleState}
        />
        <span className="error">{error ? error : ''}</span>
      </label>
    )
  }  
}

export default FullName;