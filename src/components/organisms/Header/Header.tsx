// Styled Components
import { HeaderWrapper } from "./Header.styled";
import { LinkAnchor } from "../../atoms/Link";

// Assets
import vollLogo from "../../../assets/brand/logo.png";
import profileAsset from "../../../assets/icons/profile.png";

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
