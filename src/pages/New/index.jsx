import { Header } from "../../components/Header";

import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

import { NewContainer, Form } from "./styles";

export function New() {
  return (
    <NewContainer>
      <Header />
      <main>
        <Form>
          <header>
            <h2>Criar nota</h2>
            <a href="/">Voltar</a>
          </header>

          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem value="https://github.com/thiago-weslley" />
            <NoteItem isNew />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="Git" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>

          <Button content="Salvar" />
        </Form>
      </main>
    </NewContainer>
  );
}
