export default function breedsReducer (state = [], action){
  // return Object.assign({}, state, {location: action.payload})
  if (action.type === 'SET_BREEDS'){
    return action.payload;
  } else {
    return state;
  }
}
