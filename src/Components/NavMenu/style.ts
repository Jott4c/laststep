import styled from "styled-components";

export const MenuMobile = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100vw;
    height: 120px;

    background: white;

    .logo-mobile{   
        width: 250px;
    }

    .nav-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 4px;
        background-color: var(--color-primary);
        color: #ffffff;
        font-weight: bold;
        width: 25px;
        height: 25px;
    }

    @media (min-width: 1024px) {
        display: none;
    }
`;