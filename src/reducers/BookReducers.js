export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.book]
    default:
      return state
  }
}