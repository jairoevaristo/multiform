import { ReactNode } from 'react';
import { Container, FormArea, Content, SideBar, Wrapper } from './styles';

import { Header } from '../Header';

type WrapperContentProps = {
  children: ReactNode;
}

function WrapperContent({ children }: WrapperContentProps) {
  return (
    <Container>
      <Content>
        <Header />
        <Wrapper>
          <SideBar>
            oo
          </SideBar>

          <FormArea>
            {children}
          </FormArea>
        </Wrapper>
      </Content>
    </Container>
  )
}

export { WrapperContent };