import React from 'react';

import { render } from '@testing-library/react';

import { Task } from '@/entities';

describe('Task', () => {
  const isDone = false;
  const mockOnChangeTaskTitle = jest.fn();
  const mockOnChangeIsDone = jest.fn();

  test('title should be correct', () => {
    const { getByTestId } = render(
      <Task
        id="1"
        onChangeIsDone={mockOnChangeIsDone}
        title="buy a milk"
        onChangeTaskTitle={mockOnChangeTaskTitle}
        isDone={isDone}
      />,
    );
    const span = getByTestId('span');
    expect(span.textContent).toMatch('buy a milk');
  });
});
