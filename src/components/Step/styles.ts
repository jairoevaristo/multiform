import styled from 'styled-components';

type Props = {
  isActive: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 28px;
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h1 {
    font-size: 18px;
    font-weight: 600;
    color: #FFF;
    margin-bottom: 4px;
  }

  span {
    font-size: 13px;
    color: #B8B8D4;
    font-weight: 400;
  }
`;

export const Wrapper = styled.div<Props>`
  width: 50px;
  height: 50px;

  margin-right: 10px;

  border-radius: 50%;
  background-color: ${({ isActive }) => isActive ? '#25CD89' : '#494A7C' } ;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Pointer = styled.div<Props>`
  width: 15px;
  height: 15px;
  position: absolute;
  right: -8px;

  border-radius: 50%;
  background-color: ${({ isActive }) => isActive ? '#25CD89' : '#02044A' } ;

  border: 3px solid #494A7C;
`;
