import React from 'react';

class FormDataDisplay extends React.Component {
  render() {
    const { currentState: {
      name, email, cpf, address, city, countryState,
      addressType, resume, role, roleDescription, showDisplay
    } } = this.props;
    if (!showDisplay) return '';
    return (
      <div>
        <h2>Dados enviados:</h2>
        <h3>Pessoais</h3>
          <div>Name: { name }</div>
          <div>Email: { email }</div>
          <div>CPF: { cpf }</div>
          <div>Endereço: { address }</div>
          <div>Cidade: { city }</div>
          <div>Estado: { countryState }</div>
          <div>Tipo de endereço: { addressType }</div>
        <h3>Profissionais</h3>
          <div>Resumo do Currículo: { resume }</div>
          <div>Cargo: { role }</div>
          <div>Descrição do Cargo: { roleDescription }</div>
      </div>
    )
  }
}

export default FormDataDisplay;