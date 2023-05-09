import styled from "styled-components"

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    
    

    background-image: linear-gradient(to right, #DBFBFB, #FDEFCE00);

    .modal{
        display: none;
    }
    .content-info{ 
        display: flex;
        flex-direction: column;
    }
    @media screen and (max-width: 980px){
        .modal{
        display: flex;
    }
    }
`

export const MainContent =  styled.main`
    width: 80%;
    display: flex;

    img{ 
        width: 80%;
    }

    .infos-main{ 
        display: flex;
        flex-direction: column;
        margin-top: 80px;
        
        h1{ 
            font-size: 60px;
            font-weight: bold;
            color: var(--color-primary);
            
        }

        p{ 
            font-size: 24px;
            color: #000000;
            font-weight: 400;
            margin-top: 40px;
        }

        .linkButton {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            margin-top: 40px;
            border-radius: 4px;
            background-color: var(--color-primary);
            color: #FFFFFF;
            width: 17.625rem;
            height: 3.75rem;
            font-weight: bold;
            cursor: pointer;
            font-size: 16px;
        }
    }

    .infos{ 
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        color: #000 ;
        gap: 30px;
        p { 
            font-size: 16px;
            font-weight: 400;
            margin: 0px;
        }

        .number{
            font-weight: 600;
            font-family: 'Abhaya Libre', serif;
            font-size: 36px;
            color: var(--color-primary-focus)
        }
    }

    @media screen and (max-width: 980px){
        img{
            display: none;
        }
        display: flex;
        justify-content: center;

        .infos-main{ 
        display: flex;
        flex-direction: column;
        margin-top: 80px;
        
        h1{ 
            font-size: 50px;
        }

        p{ 
            font-size: 20px;
            margin-top: 50px;
        }

        button {
            margin-top: 50px;
            width: 18.75rem;
            height: 3.75rem;
            font-size: 16px;
        }
    }
}
`

export const Infos = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    

`

export const Footer = styled.footer`
    width: 100%;
    height: 40px;
    display: flex;
    color: #fff;
    background-color: var(--color-primary);
    align-items: center;
    justify-content: center;
    font-weight: bold;
`