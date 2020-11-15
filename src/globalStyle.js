import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

*{
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    max-width: 450px;
    padding: 20px;
    }

input, textarea, button, select, link, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    color: black;
}

h1, h2 {
    margin: 0;
}

`
