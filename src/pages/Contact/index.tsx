import { useHistory } from 'react-router';
import { Container } from './styles';

import { Button } from '../../components/Button';
import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';
import { InputComponent } from '../../components/InputComponent';

function Contact() {
  const history = useHistory();
  const { name, github, email, handleEmail, handleGithub, level } = useForm();

  useEffect(() => {
    if (name === '') {
      history.push('/');
    }
  }, []);

  function handleComplete() {
    if ((email === "" || email.length < 8)  && (github === "" || github.length < 8)) {
      return;
    }

    console.log({ name, github, level, email });
  }

  return (
    <Container>
      <span>Passo 2/3</span>
      <h2>Legal {name}, onde te achamos?</h2>
      <p>Preencha com seus contatos para podermos entrar em cantato.</p>

      <InputComponent
        value={email}
        onChange={handleEmail}
      >
        Qual o seu e-mail?
      </InputComponent>

      <InputComponent
        value={github}
        onChange={handleGithub}
        focus={false}
      >
        Qual o seu Github?
      </InputComponent>

      <Button
        title="Finalizar cadastro"
        titleBack="Voltar"
        onClick={handleComplete} 
        isBack
        onBack={() => history.goBack()}
      />
    </Container>
  )
}

export { Contact };