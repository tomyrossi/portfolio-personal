import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`



@keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .fadeInUp {
    animation: fadeInUp 0.6s ease-out;
  }

`;

export default GlobalStyle;
