const initialState = { name: '' };
//function myReducer(state = initialState, action) {
export function myReducer(state = initialState, action) {
  switch (action.type) {
    case 'NAME_UPDATED':
      return { ...state, name: action.payload };
    default:
      return state;
  }
}
