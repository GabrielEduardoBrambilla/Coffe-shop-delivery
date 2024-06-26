import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }

  

  body {
    background: ${props => props.theme['background']};
    color: ${props => props.theme['text']};
    -webkit-font-smoothing: antialiased;

  }

  body, input, textarea, button {
    font-family: 'Baloo', sans-serif;
    font-weight: normal;
    font-size: 1rem;
  }
`
