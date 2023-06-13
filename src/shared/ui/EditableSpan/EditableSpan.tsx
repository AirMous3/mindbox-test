import React, { ChangeEvent, ReactElement, useState } from 'react';

interface EditableSpanInterface {
  title: string;
  onChangeTaskTitle: (title: string) => void;
}

export const EditableSpan: React.FC<EditableSpanInterface> = React.memo(
  ({ title, onChangeTaskTitle }): ReactElement => {
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
      />
    ) : (
      <span onDoubleClick={changeEditMode}>{inputTitle}</span>
    );
  },
);
