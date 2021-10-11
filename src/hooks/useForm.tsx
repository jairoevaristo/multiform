import { ChangeEvent, createContext, ReactNode, useContext, useState } from 'react';

export enum TypeLevel {
  INITIAL = 0,
  PROFESSIONAL = 1,
}

type ContextData = {
  level: TypeLevel;
  name: string;
  currentStep: number;
  email: string;
  github: string;
  handleName: (event: ChangeEvent<HTMLInputElement>) => void;
  handleEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  handleGithub: (event: ChangeEvent<HTMLInputElement>) => void;
  handleLevel: (level: TypeLevel) => void;
  handleCurrentStep: (currentStep: number) => void;
}

type FormContextProviderProps = {
  children: ReactNode;
}

const context = createContext<ContextData>({} as ContextData);

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [name, setName] = useState('');
  const [level, setLevel] = useState<TypeLevel>(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [email, setEmail] = useState('');
  const [github, setGithub] = useState('');

  function handleName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleLevel(level: TypeLevel) {
    setLevel(level);
  }

  function handleCurrentStep(currentStep: number) {
    setCurrentStep(currentStep);
  }

  function handleEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleGithub(event: ChangeEvent<HTMLInputElement>) {
    setGithub(event.target.value);
  }

  return (
    <context.Provider value={{
      name,
      currentStep,
      email,
      github,
      level,
      handleName,
      handleCurrentStep,
      handleEmail,
      handleGithub,
      handleLevel
    }}>
      {children}
    </context.Provider>
  )
}

export function useForm() {
  const contextHook = useContext(context);
  return contextHook;
}