import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.handleState = this.handleState.bind(this);

    this.state = {
      name: '',
      lastName: '',
      age: '',
      abstract: '',
      selectState: '',
      terms: false,
    }
  }

  handleState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div className="form">
        <h1>Aula Form</h1>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <label htmlFor="name">Nome:
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleState}
            />
          </label>
          <label htmlFor="lastName">Sobrenome:
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={this.state.lastName}
              onChange={this.handleState}
            />
          </label>
          <label htmlFor="age">Idade:
            <input
              type="number"
              name="age"
              id="age"
              value={this.state.age}
              onChange={this.handleState}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Sobre você</legend>
          <label htmlFor="abstract">Resumo:
            <textarea
              name="abstract"
              id="abstract"
              cols="30"
              rows="5"
              value={this.state.abstract}
              onChange={this.handleState}
            ></textarea>
          </label>
        </fieldset>
        <fieldset>
          <legend>Endereço</legend>
          <label htmlFor="selectState">Selecione o seu Estado:
            <select
              name="selectState"
              id="selectState"
              value={this.state.selectState}
              onChange={this.handleState}
            >
              <option value="sp">São Paulo</option>
              <option value="rj">Rio de Janeiro</option>
              <option value="mg">Minas Gerais</option>
            </select>
          </label>
        </fieldset>
        <label htmlFor="terms">Concordo com os termos de uso:
            <input
              type="checkbox"
              name="terms"
              id="terms"
              value={this.state.terms}
              onChange={this.handleState}
            />
          </label>
      </div>
    )
  }
}

export default Form;