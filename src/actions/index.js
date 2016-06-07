export function selectBook(book){
    //console.log('a book has been seleced: ' + book.title);
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
    
}