import { useHistory } from 'react-router';
import { Container } from './styles';

import { Button } from '../../components/Button';
import { SelectLevel } from '../../components/SelectLevel';
import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';

function Professional() {
  const history = useHistory();
  const { name, level, handleLevel, handleCurrentStep } = useForm();

  function handleNextStep() {
    history.push('/contact');
  }

  useEffect(() => {
    if (name === '') {
      history.push('/');
    }

    handleCurrentStep(1);
  }, []);

  return (
    <Container>
      <span>Passo 2/3</span>
      <h2>{name}, o que melhor descreve você?</h2>
      <p>Escolha a melhor opção que condiz com seu estado atual profissionalmente</p>

      <SelectLevel 
        title="Sou iniciante"
        description="Começei a programar a 2 anos."
        icon="😄"
        isSelect={level === 0}
        onClick={() => handleLevel(0)}
      />

      <SelectLevel 
        title="Sou programador"
        description="Já programo há 2 anos ou mais."
        icon="😎"
        isSelect={level === 1}
        onClick={() => handleLevel(1)}
      />

      <Button
        title="Proxímo"
        titleBack="Voltar"
        onClick={handleNextStep} 
        isBack
        onBack={() => history.goBack()}
      />
    </Container>
  )
}

export { Professional };