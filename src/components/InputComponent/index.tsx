import { ChangeEvent, ReactNode } from 'react';
import { Container } from './styles';

type InputComponentProps = {
  children: ReactNode;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  focus?: boolean;
}

function InputComponent({ children, onChange, value, focus = true }: InputComponentProps) {
  return (
    <Container>
      <label>
        {children}
      </label>
      <input 
        type="text"
        value={value}
        onChange={onChange}
        autoFocus={focus}
      />
    </Container>
  )
}

export { InputComponent };