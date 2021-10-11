import { ReactNode } from 'react';
import { Container, ContentInfo, Wrapper, Pointer, } from './styles';

type StepProps = {
  children: ReactNode;
  title: string;
  description: string;
  isActive: boolean;
}

function Step({ children, description, isActive, title }: StepProps) {
  return (
    <Container>
      <ContentInfo>
        <h1>{title}</h1>
        <span>{description}</span>
      </ContentInfo>
      <Wrapper isActive={isActive}>
        {children}
      </Wrapper>

      <Pointer isActive={isActive} />
    </Container>
      
  )
}

export { Step };