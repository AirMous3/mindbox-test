import React, { ChangeEvent, ReactElement, useState } from 'react';

import * as S from './components';

interface EditableSpanInterface {
  title: string;
  isDone: boolean;
  onChangeTaskTitle: (title: string) => void;
}

export const EditableSpan: React.FC<EditableSpanInterface> = React.memo(
  ({ title, onChangeTaskTitle, isDone }): ReactElement => {
    const [editMode, setEditMode] = useState(false);
    const [inputTitle, setInputTitle] = useState(title);

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>): void => {
      setInputTitle(e.currentTarget.value);
    };

    const changeEditMode = (): void => {
      setEditMode(true);
    };

    const onBlurEffect = (): void => {
      setEditMode(false);
      onChangeTaskTitle(inputTitle);
    };

    return editMode ? (
      <input
        onBlur={onBlurEffect}
        onDoubleClick={changeEditMode}
        onChange={onChangeTitleHandler}
        value={inputTitle}
        autoFocus
      />
    ) : (
      <S.Span data-testid="span" onDoubleClick={changeEditMode} isDone={isDone}>
        {inputTitle}
      </S.Span>
    );
  },
);
