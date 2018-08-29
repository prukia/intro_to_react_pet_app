export default function animalReducer (state = "", action){
  // return Object.assign({}, state, {location: action.payload})
  if (action.type === 'SET_ANIMAL'){
    return action.payload;
  } else {
    return state;
  }
}
