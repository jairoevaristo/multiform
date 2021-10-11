import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ButtonContent = styled.button`
  padding: 20px 40px;
  color: #FFF;
  font-size: 16px;
  background-color: #25CD89;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #25CD70;
  }
`;

export const ButtonContentBack = styled.button`
  padding: 20px 40px;
  color: #FFF;
  font-size: 16px;
  background-color: #02044A;
  border-radius: 30px;
  border: solid 3px #25CD89;
  cursor: pointer;
  margin-right: 12px;

  &:hover {
    background-color: #02043A;
  }
`;