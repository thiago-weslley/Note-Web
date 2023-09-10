import { HeaderContainer, Profile } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Profile>
        <img
          src="https://github.com/thiago-weslley.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Thiago Weslley</strong>
        </div>
      </Profile>
    </HeaderContainer>
  );
}
