import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --color-primary: #FD377E;
        --color-primary-2: #E34981;
        --color-secondary: #03B898;
        --color-gray-0: #FFFFFF;
        --color-gray-1: #F8F9FA;
        --color-gray-2: #E9ECEF;
        --color-gray-3: #868E96;
        --color-gray-4: #212529;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 62.5%;
    }

    main{
        width: 80%;
        margin: 0 auto;
    }

    button,select, input{
        font-family: 'Nunito Sans', sans-serif;
    }
`;
