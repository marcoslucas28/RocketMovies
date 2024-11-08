import styled from 'styled-components'


export const Container = styled.div`
`

export const Content = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 0 auto;
    width: 1000px;

    > p {
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.WHITE_800};
    }
`

export const Title = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    > h1 {
        color: ${({theme}) => theme.COLORS.WHITE_800};
        font-size: 36px;
    }

    > svg {
        width: 40px;
    }
`

export const Informations = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const Author = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }

    > span {
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.WHITE_800};
        margin-left: 8px;
    }

    > svg {
        width: 30px;
        height: 30px;
        color: ${({theme}) => theme.COLORS.PINK_800};
        margin-left: 15px;
    }
`

export const Tags = styled.div``