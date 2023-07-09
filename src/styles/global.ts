import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #FCF0F0;
        --text: #272727;
        --white: #ffffff;
        --purple_100: #DCD6F0;
        --purple_200: #725AC1;
        --purple_300: #503A95;
        --red_100: #FFDAD3;
        --red_200: #F46142;
        --red_300: #AF3015;
        --blue_100: #A3E8EC;
        --blue_200: #19888F;
        --blue_300: #004F54;
        --yellow_100: #FFE9B0;
        --yellow_200: #FED366;
        --yellow_300: #FCA61D;
        --yellow_400: #EA9B1D;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; 
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }

        @media (max-width: 480px) {
            font-size: 81.25%;
        }
    }

    body {
        background-color: var(--background);
    }
    
    body, h1, h2, h3, p{
        margin: 0;
        padding: 0;
        font-family: 'Raleway', sans-serif;
        font-weight: normal;
        color: var(--text);
        
    }

    p {
        font-weight: 600;
    }

    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }


   .MuiAutocomplete-inputRoot {
        height: 40px;
        background-color: var(--white);
        width: 240px;
        border: 2px solid #FFDAD3;
        border: none;
        outline: none;
    }


    #section-recommendation {
        top: 0;
        width: 100%;
        position: absolute;
        z-index: -1;
    }
`