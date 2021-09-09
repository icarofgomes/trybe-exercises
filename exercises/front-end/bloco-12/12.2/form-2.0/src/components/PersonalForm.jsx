import React from 'react';

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class PersonalForm extends React.Component {
  render() {
    const { changeHandler, onBlurHandler, currentState } = this.props;
    const { name, email, cpf, address, city, countryState } = currentState;
    return(
      <fieldset>
        <legend>Dados Pessoais</legend>
        <div className="container">
          Nome:
          <input
            type="name"
            name="name"
            maxLength="40"
            value={ name }
            required
            onChange={ changeHandler }
          />
        </div>
        <div className="container">
          Email:
          <input
            type="email"
            name="email"
            maxLength="50"
            value={ email }
            required
            onChange={ changeHandler }
          />
        </div>
        <div className="container">
          CPF:
          <input
            type="text"
            name="cpf"
            maxLength="11"
            value={ cpf }
            required
            onChange={ changeHandler }
          />
        </div>
        <div className="container">
          Endereço:
          <input
            type="text"
            name="address"
            maxLength="200"
            value={ address }
            required
            onChange={ changeHandler }
          />
        </div>
        <div className="container">
          Cidade:
          <input
            type="text"
            name="city"
            maxLength="28"
            value={ city }
            required
            onChange={ changeHandler }
            onBlur= { onBlurHandler }
          />
        </div>
        <div className="container">
          Estado:
          <select
            name="countryState"
            value={ countryState }
            required
            onChange={ changeHandler }
            defaultValue=""
          >
            <option value="">Selecione</option>
            {states.map((state, index) => <option key={ index }>{ state }</option>)}
          </select>
        </div>
        <div className="container">
          <label htmlFor="house">
            Casa:
            <input
              type="radio"
              id="house"
              name="addressType"
              value="house"
              onChange={ changeHandler }
            />
          </label>
          <label htmlFor="apart">
            Apartamento:
            <input
              type="radio"
              id="apart"
              name="addressType"
              value="apart"
              onChange={ changeHandler }
            />
          </label>
        </div>
      </fieldset>
    );
  }
}
export default PersonalForm;