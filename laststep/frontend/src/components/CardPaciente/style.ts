import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 16rem;
  height: 22rem;
  margin: 15px;

  border-radius: 8px;
  border: none;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.44);

  background-color: white;

  img {
    width: 15rem;
    height: 11.5rem;
    border-radius: 8px;
    margin-top: 5px;
    object-fit: cover;
  }
  .info-container {
    width: 15rem;
    margin-top: 10px;

    h2 {
      font-family: "Poppins";
      font-size: 16px;
      font-weight: 700;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;

      letter-spacing: -0.025em;

      color: #4984e8;
    }
    p {
      font-size: 10px;
      font-weight: 400;
    }
    span {
      color: #000000;
      font-size: 10px;
      font-weight: 500;
      width: 15rem;
      height: 4rem;
    }
  }
  .container-btn {
    display: flex;
    justify-content: center;
  }
  .info-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 10px;

    width: 7.5rem;
    height: 25px;

    border-radius: 8px;
    border: none;
    background-color: #4984e8;

    color: white;
  }
`;
