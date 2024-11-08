import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: start;

    gap: 10px;

    svg {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.PINK_800};
    }
`