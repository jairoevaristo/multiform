import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Container } from './styles';
import { useForm } from '../../hooks/useForm';
import { InputComponent } from '../../components/InputComponent';
import { Button } from '../../components/Button';

function Person() {
  const history = useHistory();
  const { name, handleName, handleCurrentStep } = useForm();

  function handleNextStep() {
    if (name === "" || name.length < 8) return;

    history.push('/professional');
  }

  useEffect(() => {
    handleCurrentStep(0);
  }, []);

  return (
    <Container>
      <span>Passo 1/3</span>
      <h3>Os campos são obrigatórios</h3>
      <p>Preencha os campos abaixo com seu nome completo</p>

      <InputComponent
        onChange={handleName}
        value={name}
      >
        Seu nome completo
      </InputComponent>
      
      <Button title="Próximo" onClick={handleNextStep} />
    </Container>
  )
}

export { Person };