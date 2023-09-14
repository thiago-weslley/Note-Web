import { FiPlus, FiSearch } from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

export function Home() {
  return (
    <Container>
      <Header />
      <Brand>
        <h1>Note Web</h1>
      </Brand>

      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="Git & GitHub" />
        </li>
        <li>
          <ButtonText title="Portfolio" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar por título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note
            data={{
              title: "Git & GitHub",
              tags: [
                { id: "1", name: "Git" },
                { id: "2", name: "GitHub" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/nova-nota">
        Criar nota
        <FiPlus />
      </NewNote>
    </Container>
  );
}
