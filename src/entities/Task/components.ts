import styled from 'styled-components';

import cross from '@/shared/assets/icons/cross-icon.svg';
import mark from '@/shared/assets/icons/mark.svg';

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding-left: 40px;
  padding-bottom: 20px;
  padding-right: 40px;
  box-sizing: border-box;
`;

export const Cross = styled.div<{ isDone: boolean }>`
  background-image: url(${({ isDone }) => (isDone ? mark : cross)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
