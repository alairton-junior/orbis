import styled from "styled-components";

export const Container = styled.div`
    background-color: #F46142;
    height: 75px;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 1;
    width: 100%;
`

export const Content = styled.div`
    width: 75%;
    margin: 0 auto;
    padding-right: 0.5%;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    

    .logo a{
        
        h1 {
            font-family: 'DM Serif Display', serif;
            font-weight: normal;
            font-size: 2.25rem;
        }
        display: flex;
        gap: 12px;
        color: var(--white);
        
    }

    h1{
        color: white;
    }
`

export const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;


    li a{
        font-size: 1rem;
        color: var(--white);
    }

    input {
        padding: 8px 12px;
        width: 240px;
        border-radius: 4px;
        outline: none;
        border: 2px solid #C2D1D9;
        color: #C2D1D9;
        font-family: 'Ubuntu', sans-serif;

    }

    li:hover{
           text-decoration: underline;
           text-decoration-color: white;
    }
`
