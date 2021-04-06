// * import styled-components
import Styled from "styled-components";

// styled components - Navbar
export const NavWrapper = Styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem; // 1rem = 16px
        text-transform: capitalize !important;
    }
`;
