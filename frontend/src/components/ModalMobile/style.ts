import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    min-height: 100vh;
    z-index: 99;

    margin-top: 120px;

    background-color: #4984e8;

    @media (min-width: 1024px) {
        display: none;
    }
`;

export const Nav = styled.div`
    width: 300px;
    height: 100vh;
    position: fixed;

    @media (min-width: 768px) {
        width: 600px;
    }

    .ancors{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 50px;

        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 24px;
        letter-spacing: -0.025em;
        text-decoration: none;
        color: white;

    }
    .msg-btn {
        width: 100%;
        height: 60px;

        margin-top: 20px;
        margin-bottom: 20px;

        background-color: white;
        border: none;
        border-radius: 8px;
    }

    .nav-user{
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        height: 300px;
        /* margin-top: 25px; */
    }

    .user-img-container{
        width: 60px;
        height: 60px;

        border: 1px solid black;
        border-radius: 106px;
    }

    .user-name{
        margin: 10px;
        color: white;
    }

    .user-btn {
        width: 100%;
        height: 30px;
        margin: 7px;

        border: none;

        color: white;
        font-weight: 500;
        background-color: transparent;
    }

    .user-out-btn {
        width: 100%;
        height: 30px;

        border: none;

        color: #fc596c;
        font-weight: 500;
        background-color: transparent;
      }
`;


