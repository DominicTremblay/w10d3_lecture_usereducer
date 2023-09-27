import { useState } from 'react';
import './App.css';

function App() {
  const [superheroes, setSuperheroes] = useState([
    {
      id: 370,
      name: 'Harley Quinn',
      occupation: 'Psychiatrist',
      base: 'Gotham City',
    },
  ]);

  const lastId = () => superheroes.slice(-1)[0].id;

  const createSuperhero = (superhero) => {
    // update the current state and add the new superhero
    // {
    //   id: 70,
    //   name: 'Batman',
    //   occupation: 'Businessman',
    //   base: 'Gotham City'
    // }

    setSuperheroes((state) => [...superheroes, superhero]);
  };

  const deleteSuperhero = (id) => {
    // remove that superhero from the state
    const updateSuperheroes = superheroes.filter((hero) => hero.id !== id);

    setSuperheroes(updateSuperheroes);
  };

  const updateSuperheroes = (id, superhero) => {

    console.log("Update Superheroes")
    // finding the superhero with that id and replacing the properties

    const updateSuperheroes = superheroes.map((hero) => {
      // if it does not match the id, just return the same element
      // if it does match => change the content

      if (hero.id === id) {
        return { ...superhero, hero };
      }

      return hero;
    });

    setSuperheroes(updateSuperheroes);
  };

  const allSuperheroes = superheroes.map(({ id, name, occupation, base }) => (
    <li key={id}>
      Name: {name} Occupation: {occupation}, base: {base}
    </li>
  ));

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
    </div>
  );
}

export default App;
