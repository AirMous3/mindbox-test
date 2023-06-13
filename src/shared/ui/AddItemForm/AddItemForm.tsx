import React, { ChangeEvent, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import * as S from './components';

interface AddItemFormInterface {
  onAddTask: (task: { title: string; id: string }) => void;
}

const NULL = 0;
export const AddItemForm: React.FC<AddItemFormInterface> = React.memo(
  ({ onAddTask }) => {
    const [title, setTitle] = useState('');

    const handleKeyPress = (e: React.KeyboardEvent): void => {
      if (title.length === NULL) return;

      if (e.key === 'Enter') {
        onAddTask({ title, id: uuidv4() });
        setTitle('');
      }
    };

    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
      setTitle(e.currentTarget.value);
    };

    return (
      <S.Input
        onKeyDown={handleKeyPress}
        value={title}
        onChange={handleChangeTitle}
        placeholder="What needs to be done?"
      />
    );
  },
);
