import { Container, Link } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />

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
        <Tag title="Portfolio" />
        <Tag title="GitHub" />
      </Section>

      <Button content="Voltar" />
    </Container>
  );
}
