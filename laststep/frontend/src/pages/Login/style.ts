import styled from "styled-components";


export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
`;

export const ContentForm = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;


  @media (max-width: 700px) {
     width: 100%;
  }
  div {
    width: 290px;
    > img {
      margin-bottom: 30px;
    }
    .link{
        color: var(--color-primary);
        text-decoration: none;
      }
    form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      label {
        display: inline-flex;
        color: var(--color-primary);
        font-size: 12px;
        margin-bottom: 5px;
      }
      input,
      select {
        height: 32px;
        margin-bottom: 10px;
        border-radius: 4px;
        border: 1px solid var(--grey-1);
        font-size: 16px;
        padding: 0 10px;
      }
      input::-webkit-input-placeholder {
        font-size:11px;
      }
      input:-moz-placeholder {
        font-size:12px;
      }
      input:focus::-moz-placeholder {
        font-size: 12px;
      }
      
      > button {
        height: 32px;
        border-radius: 4px;
        color: var(--grey-0);
        background-color: var(--color-primary);
        border: none;
        margin: 30px 0;
      }
      .inputPassword {
        display: flex;
        align-items: center;
        height: 32px;
        border: solid 1px var(--grey-1);
        border-radius: 4px;
        input {
          width: 95%;
          height: 28px;
          border: none;
          padding: 0 10px;
          margin: 0;
        }
        button {
          border: none;
          background: transparent;
          margin-right: 5px;
          color: var(--color-primary);
        }
      }
      p{
        color: var(--color-contrast);
        font-size: 10px;
      }

      
    }
    .link {
        text-decoration: none;
        justify-content: center;

        margin-top: 20px;

         font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 15px;

      display: flex;
      align-items: center;
      letter-spacing: -0.025em;

      color: var(--color-primary);
    }
  }
`;

export const ContentBackground = styled.div`
  width: 50%;
  height: 100vh;

  img {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    object-fit: cover;
  }
  
  @media (max-width: 700px) {
     display: none;
  }
    
  
`;

