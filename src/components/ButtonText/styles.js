import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: flex-end;

  margin-top: 6rem;

  background: none;
  color: ${({ theme }) => theme.colors.orange};
`;
