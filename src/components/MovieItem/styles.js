import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BLACK_700};
    color: ${({theme, isNew}) => isNew ? theme.COLORS.GRAY_800 : "white"};

    border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_800}` : "none"};
    border-radius: 10px;

    > button {
        border: none;
        background: none;

        color: ${({theme}) => theme.COLORS.PINK_800};
        font-size: 24px;
    }

    > input {
        height: 45px;
        outline: none;

        background: transparent;
        border: none;
        font-size: 16px;
        color: ${({theme, isNew}) => isNew ? theme.COLORS.GRAY_800 : "white"};

        &:placeholder {
            color: ${({theme, isNew}) => isNew ? theme.COLORS.GRAY_800 : "white"};
            }
        
    }
`