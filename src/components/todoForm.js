import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addToDo, removeFromToDo } from '../features/toDo/todoSlice';
import { Button } from '@antscorp/antsomi-ui';

const ToDo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const  todos= useSelector(state =>state.todos)

  const handleSubmit = () => {
    if (text.trim() !== '') {
      dispatch(addToDo(text));
      setText('');
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromToDo(id));
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={()=>handleSubmit()}>Thêm</button>

      {/* Render the todos */}
      <ul>
        {todos.map(todo => (
          
          <div key={todo.id} style={{display:'flex', marginRight: '20px'}}>
            <li >{todo.text}</li>
            <Button 
              onClick={()=>handleRemove(todo.id)}
              danger
              htmlType="button"
              shape="default"
              size="middle"
              type="default"
            >
            Xóa
            </Button>
          </div>
        ))}
      </ul>
    
    </>
  );
};

export default ToDo;
