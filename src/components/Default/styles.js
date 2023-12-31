import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    padding: 20px;

    svg{
        width: 100px;
        height: 100px;
        color: green;
    }
`;

export const Logo = styled.img`
    width: 350px;
`;

export const Info = styled.span`
    font-size: 18px;
    text-align: center;
    max-width: 500px;
`;