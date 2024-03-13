import logo from "../../assets/Nu Kenzie.svg";
import { StyledHeader } from "../../styles/header";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="logo__container">
        <img src={logo} alt="logotipo NuKenzie" />
      </div>
    </StyledHeader>
  );
};
