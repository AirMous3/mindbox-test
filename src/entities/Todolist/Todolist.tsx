import React from 'react';

import { Task } from '@/entities';

interface TodolistInterface {
  todos: { title: string; id: string; isDone: boolean }[];
  onChangeTaskTitle: (title: string, id: string) => void;
  onChangeIsDone: (id: string) => void;
}

export const Todolist: React.FC<TodolistInterface> = React.memo(
  ({ todos, onChangeTaskTitle, onChangeIsDone }) => (
    <ul>
      {todos.map(({ title, id, isDone }) => (
        <Task
          title={title}
          key={id}
          onChangeTaskTitle={onChangeTaskTitle}
          onChangeIsDone={onChangeIsDone}
          id={id}
          isDone={isDone}
        />
      ))}
    </ul>
  ),
);
