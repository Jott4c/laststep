import styled from "styled-components";

export const Main = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;
export const Menu = styled.div`
  position: fixed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;

  nav {
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 4px 4px 14px -1px rgba(0, 0, 0, 0.86);

    @media (min-width: 320px) {
      display: none;
    }

    @media (min-width: 1024px) {
      display: flex;
    }

    .top-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 253px;
      img {
        margin-top: 20px;
      }
    }
    .ancors {
      display: flex;
      width: 253px;
      height: 60px;
      padding-left: 26px;
      box-shadow: 0px 0px 8px -3px rgba(0, 0, 0, 0.86);
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      line-height: 24px;
      align-items: center;
      letter-spacing: -0.025em;
      text-decoration: none;
      color: var(--color-primary);
    }
    .ancors:hover {
      border-right: solid 5px var(--color-primary);
      border-bottom: solid 1px var(--color-primary);
      border-top: solid 1px var(--color-primary);
    }
    img {
      width: 180px;
      height: 42px;
    }
    > button {
      width: 200px;
      height: 40px;
      color: var(--grey-0);
      border: none;
      border-radius: 4px;
      margin-top: 10px;
    }
    .inputSearch {
      width: 200px;
      height: 30px;
      border: solid 1px var(--grey-1);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 20px 0;
      input {
        width: 95%;
        border: none;
        padding-left: 10px;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--grey-0);
        background-color: var(--color-primary);
        border-radius: 4px;
        border: none;
        height: 30px;
        width: 35px;
      }
    }
    .div-line {
      height: 2px;
      width: 225px;
      margin-left: 15px;

      background: #4984e8;
      border-radius: 5px;
    }
    .nav-menu {
      padding-bottom: 10px;
      width: 100%;
      height: 200px;
    }
    .create-menu {
      margin-top: 10px;
      padding-bottom: 10px;

      width: 100%;
      height: 110px;
    }
    .msg-btn {
      width: 253px;
      height: 60px;

      margin-top: 10px;
      margin-bottom: 10px;

      background-color: white;
      border: none;
    }
    .msg-btn:hover {
      background-color: #4984e8;
      color: white;
      border: none;
    }
    .user-nav {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 253px;
      height: 200px;
      margin-top: 10px;

      .user-img-container {
        width: 70px;
        height: 70px;

        border: 1px solid var(--color-primary);
        border-radius: 50%;
        > img {
          width: 70px;
          height: 70px;

          border: 1px solid var(--color-primary);
          border-radius: 50%;
          margin: 0;
          object-fit: cover;
        }
      }

      .user-name {
        color: var(--color-primary);
        margin: 10px;
      }

      .user-btn {
        width: 253px;
        height: 30px;

        border: none;

        color: var(--color-primary);
        font-weight: 500;
        background-color: transparent;
      }
      .user-btn:hover {
        background-color: var(--color-primary);
        color: white;
      }
      .user-out-btn {
        width: 253px;
        height: 30px;

        border: none;

        color: #4984e8;
        font-weight: 500;
        background-color: transparent;
      }
      .user-out-btn:hover {
        background-color: var(--color-contrast);
        color: white;
      }
    }
    li {
      margin-top: 5px;
      .link {
        font-size: 12px;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        letter-spacing: 0.05rem;
        color: var(--color-primary);
        text-decoration: none;
        &:hover {
          -webkit-transition: 0.2s;
          filter: brightness(0.8);
          font-size: 14px;
        }
      }
    }
  }
`;
export const Container = styled.div`
  padding-top: 10px;
  /* margin: 0px 0 0 253px; */
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(90deg, #dbfbfb 0%, rgba(253, 239, 206, 0) 100%);

  @media (min-width: 1024px) {
    padding-left: 60px;
    padding-top: 20px;
    margin: 0px 0 0 253px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .user-img-container {
      display: flex;
      justify-content: center;
      width: 253px;
      height: 50px;
    }
    figure {
      width: 50px;
      height: 50px;
      border: 1px solid #61b1fa;
      border-radius: 106px;
    }
    .user-name {
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
      line-height: 24px;
      margin-top: 10px;
      align-items: center;
      text-align: center;
      letter-spacing: -0.025em;
      color: #4984e8;
    }
    .user-btn {
      width: 253px;
      height: 30px;
      margin-top: 5px;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      align-items: center;
      letter-spacing: -0.025em;
      color: #4984e8;
      background: transparent;
      border: none;
      cursor: pointer;
    }
    .user-btn:hover {
      background-color: #4984e8;
      color: white;
    }
    .user-out-btn {
      width: 253px;
      height: 30px;
      margin-top: 5px;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      align-items: center;
      letter-spacing: -0.025em;
      color: #4984e8;
      background: transparent;
      border: none;
      cursor: pointer;
    }
    .user-out-btn:hover {
      background-color: var(--color-contrast);
      color: white;
    }
  }
`;
