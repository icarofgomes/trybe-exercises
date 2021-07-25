import React from 'react';

class UserProfile extends React.Component {
  render () {
    return (
      <div>
        <div>Nome: {this.props.user.name}</div>
        <div>Idade: {this.props.user.id}</div>
      </div>
    );
  }
}

export default UserProfile;