import React from 'react';

import { Task } from '@/entities';

interface TodolistInterface {
  todos: { title: string; id: string }[];
  onChangeTaskTitle: (title: string, id: string) => void;
}

export const Todolist: React.FC<TodolistInterface> = React.memo(
  ({ todos, onChangeTaskTitle }) => (
    <div>
      <div>
        {todos.map(({ title, id }) => (
          <Task
            title={title}
            key={id}
            onChangeTaskTitle={onChangeTaskTitle}
            id={id}
          />
        ))}
      </div>
    </div>
  ),
);
