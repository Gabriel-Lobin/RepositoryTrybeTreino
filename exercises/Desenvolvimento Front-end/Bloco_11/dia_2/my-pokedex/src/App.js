import pokemons from './data';
import ListaPoke from './ListaPoke';

function App() {
  return (
    <div className='Card-List'>
      { pokemons.map(({ id, name, type, image, averageWeight }) => (
      <ListaPoke 
      key={ id } 
      name={ name } 
      type={ type } 
      image={ image }
      Weight={ averageWeight }
      />
      )
      )}
    </div>
  );
}

export default App;
