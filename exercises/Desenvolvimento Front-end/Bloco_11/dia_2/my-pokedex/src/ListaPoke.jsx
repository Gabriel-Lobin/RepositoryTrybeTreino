import React from 'react'

class ListaPoke extends React.Component {
  render() {
    const { name, type, image, Weight } = this.props;
    const { value, measurementUnit } = Weight;
    return (
      <div className='Card-Poke'>
        <h3>{ name }</h3>
        <p>{ type }</p>        
        <img src={ image } alt={ name } />
        <br />
        <div>
          <span>{ value }</span>
          <span>{ measurementUnit }</span>
        </div>
      </div>
    );
  }
}

export default ListaPoke;