import styled from 'styled-components'

export const Container = styled.div`
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    width: 1000px;
    margin: 0 auto 50px;

    overflow-y: auto;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: start;

    > h1 {
        color: ${({theme}) => theme.COLORS.WHITE_800};
        font-size: 36px;
    }
`

export const Informations = styled.div`
    width: 100%;

    display: flex;
    gap: 40px;
`

export const Buttons = styled.div`
    display: flex;
    gap: 40px;

    width: 100%;
`

export const Tags = styled.div`
    > h3 {
        font-size: 20px;
        color: ${({theme}) => theme.COLORS.GRAY_700};
        margin-bottom: 24px;
    }

    > div {
        color:${({theme}) => theme.COLORS.BLACK_900} ;
        width: 100%;
        border-radius: 10px;
        padding: 10px;
        display: flex;
        gap: 20px;
    }
`

