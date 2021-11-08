import Styled from 'styled-components';
import { shade } from 'polished';

export const ContinerInfo = Styled.div`
  align-items: center;
  background-color: #fffffe;
  border-radius: 8px;
  box-shadow: 5px 5px 8px #3da9fc;
  display: flex;
  flex-direction: column;
  margin: 140px auto;
  max-width: 600px;
  padding: 16px;

  label {
    display: flex;
    flex-direction: column;
    margin: 8px 0;
    width: 320px;
  }

  input {
    border: 1px solid #7d7d7d;
    border-radius: 4px;
    padding: 2px 8px;
    outline: none;
  }

  button {
    align-items: center;
    background-color: #3da9fc;
    border: 0;
    border-radius: 6px;
    color: #fffffe;
    display: flex;
    font-size: 20px;
    font-weight: 600;
    justify-content: center;
    margin: 8px;
    padding: 8px;
    transition: all 0.2s;
    width: 160px;

    &:hover {
      background-color: ${shade(0.1, '#3da9fc')};
    }
  }
`;
