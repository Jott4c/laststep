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
  flex-wrap: wrap;
  width: 770px;
  position: relative;
  background-color: white;
  border-radius: 8px;

  .card-modal-header {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 770px;
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

  .card-modal-img {
    width: 250px;
    height: 240px;
    margin: 20px;

    border-radius: 8px;

    img {
      width: 250px;
      height: 230px;
      object-fit: contain;

      border-radius: 8px;
    }
  }

  .card-modal-info {
    width: 450px;
    margin-top: 30px;
  }

  .info-title {
    margin-bottom: 3px;
  }

  .info {
    margin-bottom: 15px;
  }

  form {
    display: flex;
    align-items: center;
    margin: 30px 0;
    .msg-input {
      width: 650px;
      height: 100px;
      margin-left: 20px;

      border: solid black 1px;
      border-radius: 8px;
      padding: 10px;
      resize: none;
    }

    .text-btn {
      width: 80px;
      height: 80px;
      margin-left: 10px;

      border: none;
      border-radius: 8px;

      background-color: var(--color-primary);
      color: white;
      box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);

      font-weight: 500;
    }
  }
`;
