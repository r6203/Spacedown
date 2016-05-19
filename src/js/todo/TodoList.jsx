import React from 'react';

import Todo from './Todo';
import './TodoList.scss';

const todos = [
  { title: 'Play soccer' },
  { title: 'Make laundry' },
  { title: 'Chillout' },
];

const TodoList = () => (
  <div>
    <h2>Todos:</h2>
    <ul>
      {todos.map(todo => <Todo key={todo.title} title={todo.title} />)}
    </ul>
  </div>
);

export default TodoList;
