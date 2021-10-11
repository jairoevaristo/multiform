import { ReactNode } from 'react';
import { Container, FormArea, Content, SideBar, Wrapper } from './styles';
import { Step } from '../Step';
import { Header } from '../Header';
import { MdOutlinePersonOutline, MdComputer, MdOutlineEmail } from 'react-icons/md';
import { useForm } from '../../hooks/useForm';

type WrapperContentProps = {
  children: ReactNode;
}

function WrapperContent({ children }: WrapperContentProps) {
  const { currentStep } = useForm();

  return (
    <Container>
      <Content>
        <Header />
        <Wrapper>
          <SideBar>
            <Step
              title="Pessoal"
              description="Se Identifique"
              isActive={currentStep === 0}
            >
              <MdOutlinePersonOutline size={32} color="#FFF" />
            </Step>

            <Step
              title="Carreira"
              description="Seu nível"
              isActive={currentStep === 1}
            >
              <MdComputer size={32} color="#FFF" />
            </Step>

            <Step
              title="Contato"
              description="Como te achar"
              isActive={currentStep === 2}
            >
              <MdOutlineEmail size={32} color="#FFF" />
            </Step>
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