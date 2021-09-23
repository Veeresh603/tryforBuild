import { createGlobalStyle } from "styled-components"

const TypographyStyles = createGlobalStyle`

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 900;
    line-height: 1.4;
     font-family:"Montserrat", sans-serif;
  }

  h2{
    font-size: 18px;
    font-family:"Montserrat", sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
    color: var(--secondaryColor) !important;

  }

  h1 {
    font-size: 22px;
    font-family:"Montserrat", sans-serif;
    font-weight: 600;
    letter-spacing: 1px;

    @media (min-width: 768px) {
      font-size: 1.6rem;
      line-height: 1.3;
    }

    @media (min-width: 1080px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-family:"Montserrat", sans-serif;
  
  }

  p {
    font-size: 1rem;
    line-height: 1.45;
    margin: 1rem 0;
    font-family:"Montserrat", sans-serif !important;
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }

    @media (min-width: 1080px) {
      font-size: 1.2rem;
      line-height: 1.4;
    }
  }
ul, li{
  font-family:"Montserrat";
}
  
`
export default TypographyStyles
