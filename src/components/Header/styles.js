import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  grid-area: header;

  position: fixed;

  height: 9rem;
  width: 100%;
  padding: 0 5.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_900};
  border-bottom: 2px solid ${({ theme }) => theme.colors.background_600};

  @media screen and (max-width: 490px) {
    padding: 0 1.4rem;
  }
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

export const Logout = styled.button`
  background: none;
  display: flex;
  align-items: center;

  > svg {
    color: ${({ theme }) => theme.colors.gray_100};
    font-size: 2.6rem;
    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;
