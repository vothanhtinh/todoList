// src/components/TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../features/toDo/todoSlice';

const ToDo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
  //  if (text.trim() !== '') {
      ;
 //     setText('');
  //  }
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={()=>dispatch(addToDo())}>Thêm</button>
      </>
  );
};

export default ToDo;
