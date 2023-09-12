import { styled } from "styled-components";

export const NoteContainer = styled.button`
  width: 100%;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.background_600};
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;

  > h2 {
    flex: 1;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white_100};
    text-align: left;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 2rem;
  }
`;
