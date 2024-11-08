import styled from 'styled-components'

export const Container = styled.div``

export const Form = styled.form`
    padding: 10px;
    width: 400px;
    margin: auto;

    > div:nth-child(4){
        margin-top: 20px;
    }
`

export const Avatar = styled.div`
    width: 150px;
    height: 150px;

    position: relative;

    margin: -80px auto 60px;

    > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        display: block;
    }

    > label {
        position: absolute;
        bottom: 0;
        right: 0;
        cursor: pointer;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({theme}) => theme.COLORS.PINK_800};

        > svg {
            font-size: 20px;
            color: ${({theme}) => theme.COLORS.BLACK_900};
        }

        > input {
            display: none;
        }
    }
`

export const Header = styled.header`
    width: 100%;
    padding: 50px;
    background-color: #FF859B40;
    display: flex;
    align-items: center;
`