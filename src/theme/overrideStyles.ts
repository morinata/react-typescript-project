import {createGlobalStyle} from 'styled-components';
import colors from './colors';
import {font_medium} from './fonts';

const {
    black000,
    blue100,
    white000,
    grey080
} = colors;

export const OverrideStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    ${font_medium};
    color: ${black000};
  }
  
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .container {
      width: 800px;
      height: calc(100vh - 100px);
      margin-top: 100px;
  }

  button.MuiButtonBase-root {
    ${font_medium};
    text-transform: unset;
  }
  
  li.MuiButtonBase-root {
    ${font_medium};
  }
  
  .MuiInputBase-root {
    ${font_medium};
    min-width: 200px;
    height: 40px;
    background-color: ${white000};
    padding: 10px 30px 10px 10px;
    border: 1px solid ${grey080};
    
    &:hover {
      border: 1px solid ${blue100};
    }
    
    & fieldset {
      border: none;
    }
    
    & .MuiSelect-select {
      ${font_medium};
      padding: 0;
    }
  }

  // ------------- Animations ------------- //
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
