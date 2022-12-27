import styled from "styled-components";

export const HeaderAll = styled.div`
  width: 100%;
  height: 6.25rem;
  display: flex;
  justify-content: center;
  box-shadow: 10px 5px 5px var(--grey-2);
  background-color: #fff;

  @media screen and (max-width: 980px){
    width: 100%;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 30px;

  }
`;

export const HeaderContent = styled.header`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .linkButton { 
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: var(--color-primary);
    color: #ffffff;
    font-weight: bold;
    width: 11.25rem;
    height: 2.5rem;
    cursor: pointer;
    text-decoration: none;
  }

  .link {
    font-size: 14px;
    text-decoration: none;
    color: var(--color-primary);
    font-weight: bold;
    position: relative;
  }
  
  .link:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--color-primary);
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  border-radius: 4px;
}

  .link:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .icon{
    display: none;
  }

  @media screen and (max-width: 980px){
      width: 100%;
      justify-content: space-between;
      

      .icon{
        display: flex;
        width: 35px;
        height: 35px;
        background-color: var(--color-primary);
        border-radius: 4px;
        color: #fff;
      }

      #burguer-menu{ 
        display: flex;
        justify-content: center;
        align-items: center;
        width: 34px;
        height: 34px;
      }

      .link{ 
        display: none
      }

      .linkButton{ 
        display: none;
      }
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  background-color: var(--color-primary);
  color: #ffffff;
  font-weight: bold;
  width: 11.25rem;
  height: 2.5rem;
  cursor: pointer;
`;
