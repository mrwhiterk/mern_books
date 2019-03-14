export const addToBooks = (book) => {
  console.log(`ACTION: adding ${book.title} to library`)
  return {
    type: 'ADD_ITEM',
    book
  }
}