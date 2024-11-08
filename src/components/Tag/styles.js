import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 10px;
    background-color: ${({theme}) => theme.COLORS.BLACK_600};
    color: #E5E5E5;
    padding: 10px 10px;
    display: inline;
    align-items: center;
    text-align: center;
    margin-right: 10px;
`