// import axios from 'axios';
// import serverUrl from '../components/constants'

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.book]
    default:
      return state
  }
}