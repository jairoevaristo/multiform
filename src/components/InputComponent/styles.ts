import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 28px;
    font-size: 17px;
    font-weight: 400;
    margin-bottom: 12px;
  }

  input {
    padding: 20px 18px;
    border-radius: 15px;
    border: 3px solid #25CD89;
    background-color: #02044A;

    font-size: 17px;
    color: #FFF;
  }
`;