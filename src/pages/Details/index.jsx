import { Container, Link, Content, TagsContainer } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Git & GitHub</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            dolores, incidunt ipsum quo ab sequi repellendus laborum sit, magni
            cumque libero impedit minus esse? Cupiditate beatae animi vitae
            accusantium nemo?
          </p>
          <Section title="Links Úteis">
            <Link>
              <li>
                <a href="#">https://github.com/thiago-weslley</a>
              </li>
              <li>
                <a href="#">https://github.com/thiago-weslley</a>
              </li>
            </Link>
          </Section>
          <Section title="Tags">
            <TagsContainer>
              <Tag title="Portfolio" />
              <Tag title="GitHub" />
            </TagsContainer>
          </Section>
          <Button content="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
