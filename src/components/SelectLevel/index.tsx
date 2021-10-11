import { Container, WrapperIcon, Content } from './styles';
import { TypeLevel, useForm } from '../../hooks/useForm';

type SelectLevelProps = {
  icon: string;
  title: string;
  description: string;
  isSelect: boolean;
  onClick: () => void;
}

function SelectLevel({ description, icon, title, isSelect, onClick }: SelectLevelProps) {

  return (
    <Container isSelect={isSelect} onClick={onClick}>
      <WrapperIcon>
        {icon}
      </WrapperIcon>

      <Content>
        <h1>{title}</h1>
        <span>{description}</span>
      </Content>
    </Container>
  )
}

export { SelectLevel };