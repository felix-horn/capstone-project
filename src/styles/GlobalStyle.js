import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

:root {
    

    --almost-black: #212121; //font-color
    --dark-gray: #757575; //UndoIcon
    --mid-gray: #878889; //AddIconStyled
    --light-gray: #b2b2b2; //placeholder
    --border-gray: #dadcdf; //border-top
    --box-shadow: 0 1px 3px #0004; //UndoButton
}

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
    color: var(--almost-black);
    }

input, textarea, button, select, link, textarea {
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    font-size: inherit;
}

`
