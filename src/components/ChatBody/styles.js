import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    background-color: ${props => props.theme.colors.secondary};
    overflow-y: auto;

    &::-webkit-scrollbar{
        width: 6px;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: rgba(0,0,0,0.2);
    }
`;