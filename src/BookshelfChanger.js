import React from 'react';

const BookshelfChanger = ({book, updateShelf, elementClass }) => {
  return (
    <div className={elementClass}>
      <select  value={book.shelf || 'none'} onChange={(evt)=>updateShelf(book, evt.target.value)}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
};

export default BookshelfChanger;