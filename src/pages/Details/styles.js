import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: 10rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    padding: 9rem 0 4rem 0;
  }
`;

export const Content = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 1rem;

  > h1 {
    margin: 2.4rem 0 1.2rem 0;
  }
`;

export const Link = styled.ul`
  > li {
    margin-top: 1rem;

    a {
      color: ${({ theme }) => theme.colors.white_100};
    }
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
