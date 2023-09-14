import { styled } from "styled-components";

export const TextareaContainer = styled.textarea`
  width: 100%;
  height: 12rem;
  border-radius: 10px;
  margin-top: 2rem;
  padding: 1rem;

  color: ${({ theme }) => theme.colors.white_100};
  background: ${({ theme }) => theme.colors.background_600};
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;

  resize: none;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.white_100};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_100};
  }
`;
