import { styled } from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.background_600};
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.colors.white_100};
  }

  > input {
    width: 100%;
    height: 5.6rem;
    padding-left: 1rem;
    color: ${({ theme }) => theme.colors.white_100};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_100};
    }

    &:focus {
      outline: none;
    }
  }

  > svg {
    margin: 0 0.5rem 0 1.6rem;
  }
`;
