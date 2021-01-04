import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

:root {
    --CTA-blue: #4285F4;
    --warning-red: #de5246;
    --confirmation-green: #3cba5433;
    --attention-yellow: #f4b400;
    --almost-black: #212121; //font-color
    --dark-gray: #757575; //UndoIcon
    --mid-gray: #878889; //AddIconStyled
    --light-gray: #b2b2b2; //placeholder
    --white: #fff; //background UndoButton and dragged item
    --strong-box-shadow: 0 3px 8px #0005; //UndoButton
    --box-shadow: 0 1px 3px #0004; //UndoButton
    --light-box-shadow: 0 1px 3px #0003; //dragged item
    --light-box-shadow-up: 0 -1px 3px #0002; //dragged item
    --border: 1px solid #dadcdf; //border-top

    /* z-indices */
    --z-index-header: 100;
    --z-index-floating-item: 150;
    --z-index-overlay: 200;
    --z-index-item-on-overlay: 250;

}

* {
    box-sizing: border-box;
}

body {
    position: relative;
    margin: 0;
    width: 100%;
    max-width: 450px;
    padding: 50px 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    font-weight: 300;
    color: var(--almost-black);
    }

h1, h2 {
    margin: 0;
}

`
