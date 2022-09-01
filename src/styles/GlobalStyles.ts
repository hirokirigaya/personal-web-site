import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
 }

 html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, button, input {
    font-family: 'Lexend', sans-serif;
    font-size: 1rem;
  }
  
  button {
    cursor: pointer;
  }

  @keyframes navLinkAnimation {
  from {
    opacity: 0;
    transform: translateY(-50px);
  } 
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

  ::-webkit-scrollbar-thumb {
    background-color: #1b1b1b;
  }

  ::-webkit-scrollbar {
    background-color: #e6e6e6;
    width: 8px;
    height: 8px;
  }
`;
