import { HeaderContainer, Profile, Logout, Image } from "./styles";
import { RiShutDownLine } from "react-icons/ri";

export function Header() {
  return (
    <HeaderContainer>
      <Profile>
        <Image to="/perfil">
          <img
            src="https://github.com/thiago-weslley.png"
            alt="Foto do usuário"
          />
        </Image>

        <div>
          <span>Bem-vindo</span>
          <strong>Thiago Weslley</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine title="Deslogar" />
      </Logout>
    </HeaderContainer>
  );
}
