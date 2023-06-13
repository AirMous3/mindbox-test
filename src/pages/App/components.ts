import styled from 'styled-components';

export const Main = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 5px 5px 2px rgba(34, 60, 80, 0.2);
  padding-top: 40px;
  height: 100%;
  border-bottom: 0.32px solid rgba(34, 60, 80, 0.2);
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 0 2px 5px 0 rgba(34, 60, 80, 0.2);

  button {
    cursor: pointer;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    height: unset;
    gap: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
