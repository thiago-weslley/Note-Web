import { FiPlus } from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  return (
    <Container>
      <Header />
      <Brand>
        <h1>Note Web</h1>
      </Brand>

      <Menu>
        <li>
          <ButtonText title="Todos" />
        </li>
        <li>
          <ButtonText title="Git & GitHub" />
        </li>
        <li>
          <ButtonText title="Portfolio" />
        </li>
      </Menu>

      <Search></Search>

      <Content></Content>

      <NewNote>
        Criar nota
        <FiPlus />
      </NewNote>
    </Container>
  );
}
