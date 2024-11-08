import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    color: ${({theme}) => theme.COLORS.PINK_800};
    background-color: ${({theme}) => theme.COLORS.BLACK_600};
    font-size: 16px;
    text-align: center;
    border-radius: 10px;
    height: 50px;
    align-items: center;
    justify-content: center;
    display: flex;

    > svg {
        margin-right: 10px;
        width: 20px;
    }
`