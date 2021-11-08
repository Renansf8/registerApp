import Styled from 'styled-components';
import { shade } from 'polished';

export const Container = Styled.div`
  display: flex;


`;

export const ClientsContainer = Styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin: 16px;
  }
`;

export const ClientsList = Styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 500px;
  padding-right: 32px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f0f0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cecece;
    border-radius: 15px;
  }

  span {
    font-weight: 600;
  }
`;

export const User = Styled.div`
  background-color: #fffffe;
  margin: 8px;
  padding: 16px;
  border-radius: 6px;
  width: 480px;
  box-shadow: 4px 4px 7px #3da9fc;
`;

export const MoreInfos = Styled.p`
  cursor: pointer;
  font-weight: 600;
  color: #3da9fc;
  transition: color 0.2s;

  &:hover {
    color: ${shade(0.2, '#3da9fc')};
  }
`;

export const LessInfos = Styled.p`
  cursor: pointer;
  font-weight: 600;
  color: #3da9fc;
  transition: color 0.2s;

  &:hover {
    color: ${shade(0.2, '#3da9fc')};
  }
`;

export const AllInfos = Styled.div`
`;

export const LeftContent = Styled.div`
  max-width: 240px;
`;

export const RightContent = Styled.div`
  display: flex;
  flex-direction: column ;
  flex: 1;

  h1 {
    margin: 16px auto;
    text-align: center;
  }
`;
