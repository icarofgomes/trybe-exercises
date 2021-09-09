import React from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';

class Form extends React.Component {
  render(){
    const { changeHandler, sendForm, resetForm, currentState, onBlurHandler } = this.props;
    return (
      <form>
        <PersonalForm
          changeHandler={ changeHandler }
          onBlurHandler={ onBlurHandler }
          currentState={ currentState }
        />
        <ProfessionalForm
          changeHandler={ changeHandler }
          currentState={ currentState }
        />
        <input
          type="button"
          value="Enviar"
          onClick={ sendForm }
        />
        <input
          type="button"
          value="Limpar"
          onClick={ resetForm }
        />
      </form>
    )
  }
}

export default Form;