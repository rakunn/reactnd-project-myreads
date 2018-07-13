import React from 'react';

const BookshelfChanger = ({book, updateShelf }) => {
  return (
    <div className="book-shelf-changer">
      <select onChange={(evt)=>updateShelf(book.id, evt.target.value)}>
        <option value="move" disabled selected>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
};

export default BookshelfChanger;