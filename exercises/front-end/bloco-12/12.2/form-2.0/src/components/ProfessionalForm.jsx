import React from 'react';

class ProfessionalForm extends React.Component {
  render() {
    const { changeHandler, currentState } = this.props;
    const { resume, role, roleDescription } = currentState;
    return(
      <fieldset>
        <legend>Dados Profissionais</legend>
        <div className="container">
          Resumo do Currículo:
          <textarea
            name="resume"
            maxLength="1000"
            value={ resume }
            required
            onChange={ changeHandler }
          />
        </div>
        <div className="container">
          Cargo:
          <input
            type="text"
            name="role"
            value={ role }
            maxLength="40"
            required
            onChange={ changeHandler }
            // onMouseEnter={() => alert('Preencha com cuidado essa informação!')}
          />
        </div>
        <div>
          Descrição do Cargo:
          <textarea
            name="roleDescription"
            value={ roleDescription }
            maxLength="500"
            onChange={ changeHandler }
          />
        </div>
      </fieldset>
    );
  }
}
export default ProfessionalForm;