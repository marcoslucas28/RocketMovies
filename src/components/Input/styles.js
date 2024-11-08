import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.BLACK_700};
    color: ${({theme}) => theme.COLORS.GRAY_800};
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;

    > input {
        border: 0;
        outline: none;
        margin-left: 16px;
        background-color: transparent;
        width: 100%;
        
        &:placeholder {
            font-size: 16px;
        }
    }

    > svg {
        width: 20px;
    }
`