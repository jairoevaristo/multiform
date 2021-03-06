import styled from 'styled-components';

export const Container = styled.div`
  color: #FFF;

  span {
    font-size: 12px;
    font-weight: 300;
  }

  h3 {
    margin-top: 8px;
    margin-bottom: 40px;

    font-size: 17px;
    font-weight: 400;
  }

  p {
    font-weight: 400;
    color: #B8B8D4;
    font-size: 14px;
    font-weight: 300;

    padding-bottom: 36px;
    border-bottom: solid 1px #16195C;
  }

  button {
    margin-top: 80px;
    padding: 20px 40px;
    color: #FFF;
    font-size: 16px;
    background-color: #25CD89;
    border-radius: 30px;
    cursor: pointer;

    &:hover {
      background-color: #25CD70;
    }
  }
`;