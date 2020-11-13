import { createGlobalStyle } from "styled-components";

const CSSVariables = createGlobalStyle`
:root {
  /* Font Sizes */
  --large-screen-font: 20px;
  --desktop-font: 16px; /* Beleive this is browser standard*/
  --tablet-font: 16px;
  --mobile-font: 12px;
  /*  */

  /* Variables created for navbar-1 navbar-dropdown-1 (fb)*/
  /* --bg-accent: #484a4d; */
  --nav-bg: #242526;
  --nav-height: 75px;
  --nav-button-contatiner-size: calc(var(--nav-height) * 0.6);
  --nav-button-size: calc(var(--nav-height) * 0.4);
  /* --text-color: #dadce1; */
  /* --border: 1px solid #dadce1; */
  /* --border-radius: 8px; */
  /* --speed: 500ms;  */
}
`;

export default CSSVariables;
