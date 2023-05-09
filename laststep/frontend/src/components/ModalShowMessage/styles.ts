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
    margin: 20px 0;
    padding: 10px;
    width: 95%;
    height: 60%;
    background-color: var(--grey-1);
    color: var(--grey-3);
    border-radius: 8px;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: var(--grey-2);
      border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--grey-4);
      border-radius: 10px;
    }
    div {
      display: flex;
      flex-direction: column;
      max-height: 500px;
    }
    .message {
      margin-top: 5px;
      border-radius: 5px;
      font-size: 12px;
      display: inline-block;
    }
    span {
      font-size: 7px;
      color: rgba(0, 0, 0, 0.5);
      align-self: flex-end;
    }
    .dateFrom {
      align-self: flex-end;
    }

    .dateTo {
      align-self: flex-start;
    }

    .from {
      align-self: flex-end;
    }

    .to {
      align-self: flex-start;
    }
  }

  .container-btn {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .btn-response {
      margin-left: 5px;
      border: none;
      border-radius: 4px;
      letter-spacing: 0.5px;
      color: var(--grey-0);
      background-color: var(--color-primary);
      height: 50px;
      width: 80px;
    }

    .area-response {
      border-radius: 6px;
      resize: none;
    }
  }
`;
