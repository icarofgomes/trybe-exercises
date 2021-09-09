import React from 'react';

class InputTextField extends React.Component {

  createInput = () => {
    const { field, updateState, max } = this.props;
    return(
    <label htmlFor={`input${ field }` } className="label-title"> { field }:
      <input
        type="text"
        id={`input${ field }`}
        name={ field }
        onChange={ updateState }
        required
        maxLength={ max }
      />
    </label>
    )
  }

  render() {
    return(
      <div>
        { this.createInput() }
      </div>
    )
  }
}

export default InputTextField;
