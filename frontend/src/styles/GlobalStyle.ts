import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --color-primary: #4984E8;
    --color-primary-50:rgba(73, 132, 232, 0.5);
    --color-primary-focus: #3560AA;
    --color-secundary:#61B1FA;  
    --color-contrast:#FC596C;
    --grey-3:#404040;
    --grey-2:#767676;   
    --grey-1:#D9D9D9;
    --grey-0:#FAFAFA;   
}
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}
body, html {
    overflow-x: hidden;
}

&::-webkit-scrollbar {
  width: 12px;              
}

&::-webkit-scrollbar-track {
    background: transparent;  
}

&::-webkit-scrollbar-thumb {
  background-color: #4984E8;    
  border-radius: 20px;       
  border: 3px solid white;  
}




 li {
    list-style: none;
}
button {
    cursor: pointer;
    transition: 0.5s;
    
}
button:hover{
    background-color: rgba(73, 132, 232, 0.8);
}
`;
