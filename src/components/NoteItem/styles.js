import { styled } from "styled-components";

export const NoteItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  border-radius: 10px;

  &:focus-within {
    border: ${({ theme, isNew }) =>
      isNew ? `2px dashed ${theme.colors.white_100}` : "none"};
  }

  > input {
    height: 5rem;
    width: 100%;
    padding: 0 1rem;
    color: ${({ theme }) => theme.colors.white_100};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_100};
    }

    &:focus {
      outline: none;
    }
  }

  > button {
    display: flex;
    background: transparent;
    margin-right: 1rem;
    font-size: 2.4rem;
    color: ${({ theme, isNew }) =>
      isNew ? `${theme.colors.green}` : `${theme.colors.red}`};

    svg {
      filter: drop-shadow(3px 0px 1px #000);
    }
  }

  background: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.colors.background_600};
  color: ${({ theme }) => theme.colors.gray_100};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.colors.gray_100}` : "none"};
`;
