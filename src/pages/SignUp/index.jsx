import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import { SignInContainer, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <SignInContainer>
      <Form>
        <h1>Note Web</h1>

        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <div>
          <Input placeholder="Nome" type="text" icon={FiLogIn} />
          <Input placeholder="E-mail" type="text" icon={FiMail} />
          <Input placeholder="Senha" type="password" icon={FiLock} />
        </div>

        <Button content="Cadastrar" />

        <a href="#">Voltar para o início</a>
      </Form>
    </SignInContainer>
  );
}
