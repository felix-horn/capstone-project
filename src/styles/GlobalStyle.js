import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    position: relative;
    margin: 0;
    width: 100%;
    max-width: 450px;
    padding: 30px;
    padding-top: 50px;
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    font-weight: 350;
    color: #212121;
    }

input, textarea, button, select, link, textarea {
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    font-size: inherit;
}

`
