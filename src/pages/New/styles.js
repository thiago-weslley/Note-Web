import { styled } from "styled-components";

export const NewContainer = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 10rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    div {
      width: 49%;
    }

    @media screen and (max-width: 350px) {
      div {
        width: 100%;
      }
    }
  }
`;

export const Form = styled.form`
  max-width: 55rem;
  margin: 3rem auto;
  padding: 0 2rem;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
    margin-bottom: 4rem;

    h2 {
      font-size: 2.6rem;
    }

    a {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.gray_100};
    }
  }
`;
