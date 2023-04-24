// Styled Components
import { HeaderWrapper } from "./Header.styled";
import { LinkAnchor } from "../../atoms/Link";

// Assets
import vollLogo from "../../../assets/logo.png";
import profileAsset from "../../../assets/perfil.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={vollLogo} alt="Voll" />

      <div className="links">
        <img src={profileAsset} alt="Perfil" />
        <LinkAnchor href="#">Sair</LinkAnchor>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
