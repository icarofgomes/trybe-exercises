import React from 'react';
import FullName from './FullName';
import Age from './Age';

class Form extends React.Component {
  constructor() {
    super();
    this.handleState = this.handleState.bind(this);
    this.setState = this.setState.bind(this);

    this.state = {
      fullName: '',
      age: '',
      abstract: '',
      selectState: '',
      terms: false,
    }
  }

  setError() {
    const {fullName, age, abstract, selectState, terms} = this.state;

    const errorCases = [
      !fullName.length,
      !age.length,
      !abstract.length,
      !selectState.length,
      !terms,
    ];

    const checkForm = errorCases.every((error) => error !== true);

    this.setState({
      formWithErrors: !checkForm,
    })
  }

  handleState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {this.setError();}) 
  }

  render() {
    return (
      <div className="form">
        <h1>Aula Form</h1>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <FullName
            value={this.state.fullName}
            handleState={this.handleState}
          />
          <Age
            value={this.state.age}
            handleState={this.handleState}
          />
        </fieldset>
        <fieldset>
          <legend>Sobre você</legend>
          <label htmlFor="abstract">Resumo
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
          <label htmlFor="selectState">Selecione o seu Estado
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
        <label className="terms" htmlFor="terms">Concordo com os termos de uso
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