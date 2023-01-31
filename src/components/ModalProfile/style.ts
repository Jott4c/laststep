import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 99;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 450px;
  width: 900px;
  position: relative;
  background-color: white;
  border-radius: 8px;
  .card-modal-header {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 50px;

    border-radius: 8px 8px 0 0;
    background-color: var(--color-primary);
    color: white;
    .close-btn {
      position: absolute;
      top: 3px;
      right: 3px;
      background-color: transparent;
      border: none;
      color: white;
    }
  }
  .modal-main {
    form {
      display: flex;
      flex-wrap: wrap;
      > div {
        display: flex;
        flex-direction: column;
        margin: 15px;
      }
      label {
        display: inline-flex;
        color: var(--color-primary);
        font-size: 12px;
        margin-bottom: 5px;
      }
      input,
      select {
        height: 32px;
        border-radius: 4px;
        border: 1px solid var(--grey-1);
        font-size: 16px;
        padding: 0 10px;
        width: 250px;
      }
      textArea {
        border-radius: 8px;
        padding: 10px;
        resize: none;
      }
      .container-info-btn {
        > button {
          height: 32px;
          width: 120px;
          border-radius: 4px;
          color: var(--grey-0);
          background-color: var(--color-primary);
          border: none;
          margin-top: 70px;
        }
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
    }
  }
`;
