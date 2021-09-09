import React from 'react';
import InputTextField from './InputTextField';
import InputTextAreaField from './InputTextAreaField';

class Form extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  updateState = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checked' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return(
      <form>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <InputTextField field={ 'nome' } updateState={this.updateState} max={ 40 }/>
          <InputTextField field={ 'email' } updateState={this.updateState} max={ 50 }/>
          <InputTextField field={ 'cpf' } updateState={this.updateState} max={ 11 }/>
          <InputTextField field={ 'endereço' } updateState={this.updateState} max={ 200 }/>
          <InputTextField field={ 'cidade' } updateState={this.updateState} max={ 28 }/>
        </fieldset>
        <fieldset>
          <legend>Dados Emprego</legend>
          <InputTextAreaField field={ 'resumo' } updateState={this.updateState} max={ 1000 }/>
          <InputTextField field={ 'cargo' } updateState={this.updateState} max={ 40 }/>
          <InputTextAreaField field={ 'descrição' } updateState={this.updateState} max={ 500 }/>
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default Form;