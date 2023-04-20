import styled from "styled-components";

export const ButtonStyle = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.text};
`