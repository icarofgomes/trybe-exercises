import React from 'react';

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight, image} = this.props.pokemon;
    return (
      <div className="pokemon">
        <p>Name: {name}</p>
        <p>Tipo: {type}</p>
        <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        <img src={image} alt={name} />
      </div>
    )
  }
}

export default Pokemon;