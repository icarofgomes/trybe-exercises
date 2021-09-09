import React from 'react';
import Form from './components/Form';
import FormError from './components/FormError';
import FormDataDisplay from './components/FormDataDisplay';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  sybmitted: false,
  showDisplay: false,
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  validateField = (fieldName, value) => {
    switch(fieldName) {
      case 'email':
        const isValid = value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/i);
        return isValid ? '' : 'is invalid';
      default:
        break;
    }
    return '';
  }

  updateState = (name, value) => {
    this.setState((state) => ({
      [name]: value,
      formError: {
        ...state.formError,
        [name]: this.validateField(name, value)
      }
    }));
  }

  changeHandler = ({ target }) => {
    let { name, value } = target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);

    this.updateState(name, value);
  }

  onBlurHandler = ({ target }) => {
    let { name, value } = target;
    if (name === 'city') value = value.match(/^\d/) ? '' : value;
    this.updateState(name, value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  resetForm = () => {this.setState(INITIAL_STATE) };

  sendForm = () => {this.setState({
      submitted: true,
      showDisplay: true,
    })
  };

  render() {
    const { submitted } = this.state;
    return (
      <div>
        <Form
          changeHandler={ this.changeHandler }
          sendForm={ this.sendForm }
          resetForm={ this.resetForm }
          currentState = { this.state }
          onBlurHandler = { this.onBlurHandler }
        />
        <div className="container">
          <FormError formError={ this.state.formError } />
        </div>
        { submitted && <FormDataDisplay currentState={ this.state }/>}
      </div>
    );
  }
}

export default App;
