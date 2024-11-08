import styled from 'styled-components'

export const Container = styled.textarea`
    width: 100%;
    height: 200px;

    outline: none;

    background-color: ${({theme}) => theme.COLORS.BLACK_700};
    color: #FFFFFF;

    border: none;
    resize: none;

    border-radius: 5px;

    padding: 10px;

    &::placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_800};
    }
`