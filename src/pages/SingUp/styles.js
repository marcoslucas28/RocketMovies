import styled from 'styled-components'
import img from '../../assets/image.png'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`


export const Form = styled.div`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    > h1 {
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.PINK_800};
    }

    > p {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.WHITE_900};
    }

    > h2 {  
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.WHITE_800};
        margin: 48px 0;
    }

    > a {
        margin-top: 42px;
        color: ${({theme}) => theme.COLORS.PINK_800};
        font-size: 16px;
    }
`

export const Bacground = styled.div`
    flex-grow: 1;
    background: url(${img}) no-repeat center center;
    background-size: cover;
`