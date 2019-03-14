export const addToBooks = (book) => {
  console.log(`ACTION: adding ${book} to library`)
  return {
    type: 'ADD_ITEM',
    book
  }
}