export const getBooks = (query, page) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}${page ? '&startIndex=' + (page - 1) * 10 : ''}`)
}
