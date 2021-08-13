// DEPENDENCIES
import { memo } from "react";

// STYLED
import { StyledNavbar, ImgContainer, LinksContainer } from "./styled";

// IMAGES
import logo from "../../images/logo-banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCogs,
  faComments,
  faPlus,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = memo(() => {
  return (
    <StyledNavbar>
      <ImgContainer>
        <img src={logo} alt="triviaLogo" />
      </ImgContainer>

      <LinksContainer>
        <ul>
          <li>
            <FontAwesomeIcon icon={faBars} />
            <span>BROWSE</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faPlus} />
            <span>ADD NEW QUESTIONS</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCogs} />
            <span>API</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faComments} />
            <span>DISCUSS</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faSignInAlt} />
            <span>LOGIN</span>
          </li>
        </ul>
      </LinksContainer>
    </StyledNavbar>
  );
});

export { Navbar };
