import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 22rem auto;
  grid-template-rows: 10rem 12rem auto 6rem;
  grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content";
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.orange};
  text-shadow: 4px 1px 4px ${({ theme }) => theme.colors.black};
  border-bottom: 2px solid ${({ theme }) => theme.colors.background_600};
  background: ${({ theme }) => theme.colors.background_700};
  > h1 {
    font-size: 3rem;
  }

  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
`;

export const Menu = styled.ul`
  grid-area: menu;

  padding: 5rem 1rem 0 1rem;

  text-align: center;

  background: ${({ theme }) => theme.colors.background_700};
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;

  > li {
    margin-bottom: 3rem;
  }
`;

export const Search = styled.div`
  grid-area: search;

  padding: 5rem 3rem 0;
`;

export const Content = styled.div`
  grid-area: content;

  padding: 0 3rem;
`;

export const NewNote = styled.button`
  grid-area: newnote;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-size: 1.8rem;

  background: ${({ theme }) => theme.colors.orange};
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;

  &:hover {
    background-color: #fb8332;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: #c85000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
    transform: translateY(0);
  }
`;
