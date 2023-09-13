import { styled } from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 14rem 2rem 4rem 2rem;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.background_900};
    width: 100%;
    height: 210px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.6);
  }
`;

export const Form = styled.form`
  z-index: 9;

  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 5rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  > p {
    line-height: 24px;
    margin-bottom: 6rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray_100};
  }

  > h2 {
    margin-bottom: 1.2rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding-bottom: 2rem;
  }

  > a {
    font-size: 1.8rem;
    margin-top: 6rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.orange};
  }
`;
