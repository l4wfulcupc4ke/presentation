export const Model = {
  state: {
    bag: {
      foods: ['noodle', 'rice', 'fried chicken'],
      drinks: ['pepsi', 'water', 'lemonade']
    }
  },
  reducers: {
    eat (state, payload) {
      return {
        ...state,
        bag: {
          foods: [...state.bag.foods].filter(item => item !== payload),
          drinks: state.bag.drinks
        }
      }
    },
    drink (state, payload) {
      return {
        ...state,
        bag: {
          foods: state.bag.foods,
          drinks: [...state.bag.drinks].filter(item => item !== payload)
        }
      }
    }
  }
}






