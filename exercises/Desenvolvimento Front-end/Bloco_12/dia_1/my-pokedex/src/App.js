import React from 'react';
import pokemons from './data';
import ListaPoke from './ListaPoke';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filterType: '',
    }    
  }
  render() {
    return (
      <div>
        <header className="head-page">
          <img src="https://cdn.dribbble.com/users/1771704/screenshots/6124573/pokeball-800x600.gif" alt="pokebola" />
          <h1>Pokemon</h1>
          <div />
        </header>
        <input className="poke-Filter" placeholder="type, name..." type="text" onChange={ this.filterType } />
        <div className="Card-List">
          {pokemons
            .filter(({ name }) => name.includes(''))
            .map(({ id, name, type, image, averageWeight, moreInfo }) => (
          <ListaPoke 
          key={ id } 
          name={ name } 
          type={ type } 
          image={ image }
          Weight={averageWeight}
          moreInfo={moreInfo}
          />
          )
          )}
        </div>
      </div>
    );
  }
}

export default App;
