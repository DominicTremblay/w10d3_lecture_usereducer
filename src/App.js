import { useReducer } from 'react';
import heroesReducer, {
  CREATE_SUPERHERO,
  UPDATE_SUPERHERO,
  DELETE_SUPERHERO,
} from './reducers/heroesReducer';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(heroesReducer, {
    superheroes: [
      {
        id: 370,
        name: 'Harley Quinn',
        occupation: 'Psychiatrist',
        base: 'Gotham City',
      },
    ],
    heroesCount: 1,
    lastUpdatedOn: new Date(),
  });

  const lastId = () => state.superheroes.slice(-1)[0].id;

  const createSuperhero = (superhero) => {
    // update the current state and add the new superhero
    // {
    //   id: 70,
    //   name: 'Batman',
    //   occupation: 'Businessman',
    //   base: 'Gotham City'
    // }

    dispatch({ type: CREATE_SUPERHERO, superhero });
  };

  const deleteSuperhero = (id) => {
    // remove that superhero from the state

    dispatch({ type: DELETE_SUPERHERO, id });
  };

  const updateSuperheroes = (id, superhero) => {
    console.log(superhero);
    dispatch({ type: UPDATE_SUPERHERO, id, superhero });
  };

  const allSuperheroes = state.superheroes.map(
    ({ id, name, occupation, base }) => (
      <li key={id}>
        Name: {name} Occupation: {occupation}, base: {base}
      </li>
    )
  );

  return (
    <div className="App">
      <h1>Superheroes</h1>

      <ul>{allSuperheroes}</ul>

      <input
        type="button"
        value="Create"
        onClick={() =>
          createSuperhero({
            id: 70,
            name: 'Batman',
            occupation: 'Businessman',
            base: 'Gotham City',
          })
        }
      />

      <input
        type="button"
        value="Delete"
        onClick={() => deleteSuperhero(lastId())}
      />

      <input
        type="button"
        value="Update"
        onClick={() =>
          updateSuperheroes(lastId(), {
            name: 'Joker',
            occupation: 'Joking around',
            base: 'Arkham Asylum',
          })
        }
      />

      <div>Count: {state.heroesCount}</div>
      <div>Last Updated On: {state.lastUpdatedOn.toString()}</div>
    </div>
  );
}

export default App;
