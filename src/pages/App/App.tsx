import React, { ReactElement, useCallback, useState } from 'react';

import * as S from './components';

import { Todolist } from '@/entities';
import { AddItemForm } from '@/shared';

export const App: React.FC = (): ReactElement => {
  const [todolist, setTodolist] = useState<
    { title: string; id: string; isDone: boolean }[]
  >([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'active'>('all');
  const count = todolist.length;

  const handleAddTask = useCallback(
    (task: { title: string; id: string; isDone: boolean }) => {
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

  const handleChangeIsDone = useCallback(
    (id: string) => {
      setTodolist(
        todolist.map((task) =>
          task.id === id ? { ...task, isDone: !task.isDone } : { ...task },
        ),
      );
    },
    [setTodolist, todolist],
  );

  const handleFilterAll = useCallback(() => {
    setFilter('all');
  }, [setFilter]);

  const handleFilterActive = useCallback(() => {
    setFilter('active');
  }, [setFilter]);

  const handleFilterCompleted = useCallback(() => {
    setFilter('completed');
  }, [setFilter]);

  const handleClearTasks = useCallback(() => {
    setTodolist(todolist.filter(({ isDone }) => !isDone));
  }, [setTodolist, todolist]);

  let filteredTasks = todolist;

  if (filter === 'active') {
    filteredTasks = todolist.filter((i) => !i.isDone);
  }
  if (filter === 'completed') {
    filteredTasks = todolist.filter((i) => i.isDone);
  }

  return (
    <S.Main>
      <h1>TODOS</h1>
      <AddItemForm onAddTask={handleAddTask} />
      <Todolist
        todos={filteredTasks}
        onChangeTaskTitle={handleChangeTaskTitle}
        onChangeIsDone={handleChangeIsDone}
      />

      <S.Footer>
        <div>{count} items left</div>

        <S.ButtonsWrapper>
          <button type="button" onClick={handleFilterAll}>
            All
          </button>
          <button type="button" onClick={handleFilterActive}>
            Active
          </button>
          <button type="button" onClick={handleFilterCompleted}>
            Completed
          </button>
        </S.ButtonsWrapper>

        <button type="button" onClick={handleClearTasks}>
          Clear completed
        </button>
      </S.Footer>
    </S.Main>
  );
};
