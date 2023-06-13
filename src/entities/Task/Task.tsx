import React, { ReactElement, useCallback } from 'react';

import * as S from './components';

import { EditableSpan } from '@/shared';

interface TaskInterface {
  title: string;
  id: string;
  onChangeTaskTitle: (title: string, id: string) => void;
}

export const Task: React.FC<TaskInterface> = React.memo(
  ({ title, onChangeTaskTitle, id }): ReactElement => {
    const handleChangTaskTitle = useCallback(
      (newTitle: string) => {
        onChangeTaskTitle(newTitle, id);
      },
      [onChangeTaskTitle, id],
    );

    return (
      <S.Container>
        <EditableSpan title={title} onChangeTaskTitle={handleChangTaskTitle} />
      </S.Container>
    );
  },
);
