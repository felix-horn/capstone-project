import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

*{
    box-sizing: border-box;
}

body {
    margin: 0;
    width: 100%;
    max-width: 450px;
    padding: 30px;
    font-family: 'Roboto', sans-serif;
    }

input, textarea, button, select, link, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    color: #212121;
}

h1, h2 {
    margin: 0;
}

`
