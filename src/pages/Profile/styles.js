import { styled } from "styled-components";

export const ProfileContainer = styled.div`
  > header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 14rem;
    padding-left: 2.6rem;
    background: ${({ theme }) => theme.colors.background_900};
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.6);

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${({ theme }) => theme.colors.gray_100};
    }

    svg {
      font-size: 3.8rem;
    }
  }
`;

export const Avatar = styled.div`
  width: 18rem;
  height: 18rem;
  position: relative;
  display: flex;
  align-items: center;
  margin: -9rem auto 3rem;

  > img {
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
    user-select: none;
  }

  > label {
    position: absolute;
    bottom: 14px;
    right: 7px;
    width: 4.6rem;
    height: 4.6rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.orange};

    input {
      display: none;
    }

    svg {
      font-size: 2rem;
    }
  }
`;

export const Form = styled.form`
  max-width: 35rem;
  margin: 0 auto;
  padding: 0 1.8rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }
`;
