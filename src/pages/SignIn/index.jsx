import { FiMail, FiLock } from "react-icons/fi";

import { Link } from "react-router-dom";

import { SignInContainer, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <SignInContainer>
      <Form>
        <h1>Note Web</h1>

        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <div>
          <Input placeholder="E-mail" type="text" icon={FiMail} />
          <Input placeholder="Senha" type="password" icon={FiLock} />
        </div>

        <Button content="Entrar" />

        <Link to="/cadastro">Cadastre-se</Link>
      </Form>
    </SignInContainer>
  );
}
