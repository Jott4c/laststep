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

  height: 400px;
  width: 350px;
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

  .body-msg {
    font-size: 20px;
    margin: 20px 0;
    padding: 10px;
    width: 95%;
    height: 80%;
    background-color: var(--grey-1);
    color: var(--grey-3);
    border-radius: 8px;
  }

  .container-btn {
    width: 95%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .btn-delete {
      border: none;
      border-radius: 4px;
      letter-spacing: 0.5px;
      color: var(--grey-0);
      background-color: var(--color-contrast);
      height: 30px;
      width: 70px;
    }
    .btn-response {
      border: none;
      border-radius: 4px;
      letter-spacing: 0.5px;
      color: var(--grey-0);
      background-color: var(--color-primary);
      height: 30px;
      width: 100px;
    }
  }
`;
