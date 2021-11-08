import Styled from 'styled-components';
import { shade } from 'polished';

export const Container = Styled.div`
  background-color: #fffffe;
  height: 100vh;
  width: 240px;
`;

export const ButtonsContianer = Styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 48px;

  button {
    background-color: #3da9fc;
    border: 0;
    border-radius: 6px;
    color: #fffffe;
    font-size: 20px;
    font-weight: 600;
    margin: 16px;
    padding: 8px;
    transition: all 0.2s;
    width: 160px;

    &:hover {
      background-color: ${shade(0.1, '#3da9fc')};
      transform: translateX(6px);
    }
  }

`;
