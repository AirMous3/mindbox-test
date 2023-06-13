import React, { ReactElement } from 'react';

import styled from 'styled-components';

import image from '@/shared/assets/img.jpg';

const Main = styled.div`
  color: chartreuse;
  font-size: 60px;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
`;

export const App: React.FC = (): ReactElement => <Main />;
