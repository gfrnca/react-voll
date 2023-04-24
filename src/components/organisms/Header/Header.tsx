// Styled Components
import { HeaderWrapper } from "./Header.styled";

// Assets
import vollLogo from "../../../assets/logo.png";
import profileAsset from "../../../assets/perfil.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={vollLogo} alt="Voll" />

      <div>
        <img src={profileAsset} alt="Perfil" />
        <a href="#">Sair</a>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
