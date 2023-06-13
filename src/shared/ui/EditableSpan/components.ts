import styled from 'styled-components';

export const Span = styled.span<{ isDone: boolean }>`
  text-align: left;
  width: 100%;
  text-decoration: ${({ isDone }) => (isDone ? 'line-through' : 'unset')};
  color: ${({ isDone }) => (isDone ? 'grey' : 'inherit')};
`;
