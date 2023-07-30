import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 15px 20px;
    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme.colors.secondary};
    }

    svg{
        width: 30px;
        height: 30px;
        background-color: ${props => props.theme.colors.background};
        padding: 3px;
        border-radius: 50%;
        margin-right: 10px;
        min-width: fit-content;
    }

    &.active{
        background-color: ${props => props.theme.colors.background};
    }
`;

export const Name = styled.span`
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${props => props.theme.colors.textColor};
`;

export const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
`;