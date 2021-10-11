import styled from 'styled-components';

type ContainerProps = {
  isSelect: boolean;
  onClick: () => void;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  margin-top: 22px;
  padding: 15px 20px;
  
  cursor: pointer;
  background-color: #02044A;
  border-radius: 20px;
  border: solid 3px ${({ isSelect }) => isSelect ? '#25CD89' : '#16195C' };

  display: flex;
  align-items: center;
  transition: all ease-in-out .2s;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const WrapperIcon = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 20px;
  font-size: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: #16195C;
`;

export const Content = styled.div`
  flex: 1;

  h1 {
    font-size: 18px;
    margin-bottom: 4px;
  }

  span {
    font-size: 14px;
    font-weight: 300;
  }
`;

