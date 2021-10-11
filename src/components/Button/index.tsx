import { Container, ButtonContent, ButtonContentBack } from './styles';

type ButtonProps = {
  title: string;
  onClick: () => void;
  onBack?: () => void;
  isBack?: boolean;
  titleBack?: string;
}

function Button({ onClick, title, isBack = false, onBack, titleBack }: ButtonProps) {
  return (
    <Container>
      { isBack &&  
        <ButtonContentBack onClick={onBack}>
        {titleBack}
      </ButtonContentBack>  
      }
      <ButtonContent onClick={onClick}>
          {title}
      </ButtonContent>
    </Container>
  )
}

export { Button };