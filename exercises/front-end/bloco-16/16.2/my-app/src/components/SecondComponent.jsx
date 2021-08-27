import React, { Component } from 'react';
import { connect } from 'react-redux';
import addAssignment from '../actions';

class SecondComponent extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    }
  }

  handleChange = ({ target }) => {
    this.setState({ inputValue: target.value })
  }

  render() {
    const { myFirstDispatch } = this.props;
    const { inputValue } = this.state;
    return (
      <div>
        <input
          type="text"
          onChange={ this.handleChange }
        />
        <button onClick={ () => myFirstDispatch(inputValue) }>
          Executar qualquer tarefa
        </button>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  myFirstDispatch: (value) => dispatch(addAssignment(value))
});

export default connect(null, mapDispatchToProps)(SecondComponent);
