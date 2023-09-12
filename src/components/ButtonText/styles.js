import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  background: none;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.orange : theme.colors.white_100};
`;
