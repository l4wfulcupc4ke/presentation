const initialState = {
  bag: {
        foods: ['noodle', 'rice', 'fried chicken'],
        drinks: ['pepsi', 'water', 'lemonade']
  }
}
const rootReducer = (state = initialState, action) => {
  if(action.type =='EAT') {
    return {
      ...state,
      bag: {
        foods: state.bag.foods.filter(item => item !== action.payload),
        drinks: state.bag.drinks
      }
    }
  }
  else if(action.type =='DRINK') {
    return {
      ...state,
      bag: {
        foods: state.bag.foods,
        drinks: state.bag.drinks.filter(item => item !== action.payload)
      } 
    }
  }else return state
}

export default rootReducer






