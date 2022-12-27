import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  z-index: 99;
  background: rgba(0, 0, 0, 0.5);

  .modal-box-patient {
    background: white;
    width: 600px;
    height: 470px;
    border-radius: 10px;
    position: relative;

    border-bottom: #4984e8 solid 16px;
  }

  .modal-header-patient {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 50px;
    margin-bottom: 40px;

    background: #4984e8;
    color: white;

    .close-btn {
      position: absolute;
      top: 0;
      right: 0px;
      background-color: transparent;
      border: none;
      color: white;
    }
  }

  .modal-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 420px;
    width: 500px;

    margin-left: 50px;

    .change-img-container {
      width: 200px;
      height: 200px;

      border-radius: 8px;

      img {
        width: 200px;
        height: 200px;

        border-radius: 8px;

        object-fit: cover;
      }
    }

    label {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      margin-top: 15px;

      display: flex;
      align-items: center;
      letter-spacing: -0.025em;

      color: #4984e8;
    }

    .modal-inputs {
      width: 487px;
      height: 32px;
      margin-top: 15px;
      padding-left: 10px;

      background: #fafafa;

      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }

    .modal-inputs::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }

    .save-info-btn {
      width: 487px;
      height: 40px;
      margin-top: 25px;

      background: #4984e8;
      border-radius: 4px;
      border: none;

      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: -0.025em;

      color: #ffffff;
    }
  }
`;
