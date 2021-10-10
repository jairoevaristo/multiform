import { useHistory } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { Container, FormPerson } from './styles';

function Person() {
  const history = useHistory();

  const { name, handleName } = useForm();

  function handleNextStep() {
    if (name === "" || name.length < 8) return;

    history.push('/professional');
  }

  return (
    <Container>
      <span>Passo 1/3</span>
      <h3>Os campos são obrigatórios</h3>
      <p>Preencha os campos abaixo com seu nome completo</p>

      <FormPerson>
        <label>
          Seu nome completo
        </label>
          <input 
            type="text"
            value={name}
            onChange={handleName}
            autoFocus
          />
      </FormPerson>
      <button onClick={handleNextStep}>
        Próximo
      </button>
    </Container>
  )
}

export { Person };