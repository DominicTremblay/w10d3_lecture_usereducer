export const CREATE_SUPERHERO = 'CREATE_SUPERHERO';

export const UPDATE_SUPERHERO = 'UPDATE_SUPERHERO';

export const DELETE_SUPERHERO = 'DELETE_SUPERHERO';

const heroesReducer = (state, action) => {
  // action :
  // {
  //   type: 'CREATE_SUPERHERO',
  //   superhero: {id, name, etc}
  // }

  // type of action
  // CREATE_SUPERHERO
  // UPDATE_SUPERHERO
  // DELETE_SUPERHERO

  switch (action.type) {
    case 'CREATE_SUPERHERO':
      //update the state for create => return the new state

      return {
        ...state,
        superheroes: [...state.superheroes, action.superhero],
      };

    case 'UPDATE_SUPERHERO':
      const updateSuperheroes = state.superheroes.map((hero) => {
        // if it does not match the id, just return the same element
        // if it does match => change the content

        if (hero.id === action.id) {
          return { ...action.superhero, hero };
        }

        return hero;
      });

      return {
        ...state,
        superheroes: updateSuperheroes,
      };

    case 'DELETE_SUPERHERO':
      const deleteSuperheroes = state.superheroes.filter(
        (hero) => hero.id !== action.id
      );

      return {
        ...state,
        superheroes: deleteSuperheroes,
      };

    default:
      throw new Error(`the action type ${action.type} does not exist`);
  }
};

export default heroesReducer;
