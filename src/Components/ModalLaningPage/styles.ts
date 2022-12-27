import styled from "styled-components"

export const Modal = styled.div`
position: absolute; 
  margin-top: 100px; 
  left: 0;
  top: 0;
  width: 100%;  
  overflow: auto; 
  
`

export const ModalContent = styled.div`
background-color: #fefefe;
  margin: auto;
  padding: 20px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .link {
    color: var(--color-primary);
    font-size: 17px;
    text-decoration: none;
    font-weight: bold;
  }

  .linkButton{
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fefefe;
    background-color: var(--color-primary);
    border: none;
    border-radius: 4px;
    width: 180px;
    height: 40px;
  }
  
`