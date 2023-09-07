import styled from "styled-components";

const StyledButton = styled.button`
    background-color: white;
    border: none;
    padding: 0 12px;
    &:hover {
        cursor: pointer;
    }
    &:active,
    &:focus {
        outline: none;
    }
`;

export { StyledButton };
