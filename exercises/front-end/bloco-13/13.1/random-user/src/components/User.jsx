import React from 'react';

class User extends React.Component {
  constructor() {
    super();

    this.state = {
      api: '',
    }
  }

  async componentDidMount() {
    try {
      const url = `https://api.randomuser.me/`;
      const response = await fetch(url);
      const dataJson = await response.json();
      
      this.setState({api: dataJson})
    } catch (error) {
      console.log(error)
    }
  }

  shouldComponentUpdate(_nextProps, { api }){
    const { results } = api;

    return results[0].dob.age < 60;
  }

  render() {
    const { results } = this.state.api;
    if (!results) {
      return <div>Loading...</div>
    }

    return(
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO1JEXJsy-8OhhDz1eqR1vwIlj8KCO-QG_MnAM05qQp9P_gM28fnwoRiS16dtKWRhETWk"
          alt="Profile user"
        />
        <div>Name: { results[0].name.first }</div>
        <div>Email: { results[0].email }</div>
        <div>Age: { results[0].dob.age }</div>
      </div>
    )
  }
}

export default User;