import styled from "styled-components";

export const Body = styled.div`
  width: 100vw;
  height: 100vh;

  overflow-x: hidden;

  background: linear-gradient(90deg, #dbfbfb 0%, rgba(253, 239, 206, 0) 100%);
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;

  background-color: white;

  width: 100vw;
  height: 100px;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 80vw;
  }

  img {
    width: 180px;
    height: 42px;
  }

  ul {
    display: flex;
    flex-direction: row;

    @media (min-width: 320px) {
      display: none;
    }

    @media (min-width: 1024px) {
      display: flex;
    }
  }

  li {
    margin: 90px;
  }

  .link {
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;

    display: flex;
    align-items: center;
    letter-spacing: -0.025em;
    text-decoration: none;

    color: #4984e8;

    cursor: pointer;
  }

  .enter-btn {
    width: 180px;
    height: 40px;
    left: 1139px;
    top: 30px;

    background: #4984e8;

    border-radius: 4px;
    border: none;

    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;

    text-decoration: none;

    color: #ffffff;

    cursor: pointer;

    @media (min-width: 320px) {
      display: none;
    }

    @media (min-width: 1024px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .mobile-nav {
    @media (min-width: 320px) {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 30px;
      height: 30px;

      background: #4984e8;
      color: white;

      border: none;
      border-radius: 4px;

      font-size: 20px;
    }

    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
 
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1000px;
  height: 300px;
  margin-top: 100px;

  .title {
    margin-top: 10px;
    margin-bottom: 50px;

    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 19px;

    color: #4984e8;
  }

  .paragraph {
    margin: 15px;
    align-items: center;
    text-align: center;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 15px;

    color: #000000;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 35px;

  background: #4984e8;

  font-style: normal;
  font-weight: 700;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.025em;

  color: #ffffff;

  @media (min-width: 320px) {
    font-size: 8px;
  }

  @media (min-width: 768px) {
    font-size: 12px;
  }
`;
