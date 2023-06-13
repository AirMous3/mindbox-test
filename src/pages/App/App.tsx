import React, { ReactElement, useCallback, useState } from 'react';

import * as S from './components';

import { Todolist } from '@/entities';
import { AddItemForm } from '@/shared';

export const App: React.FC = (): ReactElement => {
  const [todolist, setTodolist] = useState<{ title: string; id: string }[]>([]);

  const handleAddTask = useCallback(
    (task: { title: string; id: string }) => {
      setTodolist([...todolist, task]);
    },
    [setTodolist, todolist],
  );
  const handleChangeTaskTitle = useCallback(
    (newTitle: string, id: string) => {
      setTodolist(
        todolist.map((task) =>
          task.id === id ? { ...task, title: newTitle } : { ...task },
        ),
      );
    },
    [setTodolist, todolist],
  );

  return (
    <S.Main>
      <h1>TODOS</h1>
      <AddItemForm onAddTask={handleAddTask} />
      <Todolist todos={todolist} onChangeTaskTitle={handleChangeTaskTitle} />
    </S.Main>
  );
};
