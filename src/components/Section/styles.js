import { styled } from "styled-components";

export const SectionContainer = styled.section`
  margin: 4rem 0 0;

  > h2 {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.gray_100};

    border-bottom: 1px solid ${({ theme }) => theme.colors.background_600};

    padding-bottom: 1.6rem;
    margin-bottom: 2.2rem;
  }
`;
