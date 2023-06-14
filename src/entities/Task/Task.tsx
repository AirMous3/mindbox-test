import React, { ReactElement, useCallback } from 'react';

import * as S from './components';

import { EditableSpan } from '@/shared';

interface TaskInterface {
  title: string;
  id: string;
  isDone: boolean;
  onChangeTaskTitle: (title: string, id: string) => void;
  onChangeIsDone: (id: string) => void;
}

export const Task: React.FC<TaskInterface> = React.memo(
  ({ title, onChangeTaskTitle, id, onChangeIsDone, isDone }): ReactElement => {
    const handleChangTaskTitle = useCallback(
      (newTitle: string) => {
        onChangeTaskTitle(newTitle, id);
      },
      [onChangeTaskTitle, id],
    );

    return (
      <S.Container>
        <EditableSpan
          title={title}
          onChangeTaskTitle={handleChangTaskTitle}
          isDone={isDone}
        />

        <S.Cross
          data-testid="cross"
          onClick={() => onChangeIsDone(id)}
          isDone={isDone}
        />
      </S.Container>
    );
  },
);
