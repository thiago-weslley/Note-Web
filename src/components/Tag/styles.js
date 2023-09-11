import { styled } from "styled-components";

export const TagContainer = styled.span`
  padding: 0.5rem 1.4rem;
  border-radius: 20px;

  cursor: default;

  background: ${({ theme }) => theme.colors.orange};
`;
