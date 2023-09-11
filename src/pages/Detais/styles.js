import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: 10rem auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Link = styled.ul`
  > li {
    margin-top: 1rem;

    a {
      color: ${({ theme }) => theme.colors.white_100};
    }
  }
`;
