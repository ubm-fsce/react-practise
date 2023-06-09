import { useState } from 'react';
const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    console.log(event);
    setTitle(event.target.value);
  };

  const handleSubmit = (event)=>{
  event.preventDefault();
  console.log(1111);
  onCreate(title);
  setTitle('');
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};
export default BookCreate;