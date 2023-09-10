import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  grid-area: header;

  height: 10rem;
  width: 100%;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #161b22;
  border-bottom: 2px solid ${({ theme }) => theme.colors.background_600};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    user-select: none;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 2.2rem;

    span {
      color: ${({ theme }) => theme.colors.gray_100};
    }
  }
`;
