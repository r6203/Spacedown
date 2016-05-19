import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const Todo = ({ title }) => (
  <ListGroupItem>
    {title}
  </ListGroupItem>
);

export default Todo;

