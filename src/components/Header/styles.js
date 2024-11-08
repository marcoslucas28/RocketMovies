import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    height: 130px;

    grid-area: header;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_900};

    padding: 0 80px;

    margin-bottom: 50px;

    gap: 30px;

    > h1 {
        color: ${({theme}) => theme.COLORS.PINK_800};
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    width: 270px;

    > div {
        margin-right: 8px;
        display: flex;
        flex-direction: column;
        line-height: 24px;

        strong {
            color: ${({theme}) => theme.COLORS.WHITE_800};
            font-size: 14px;
        }

        span {
            text-align: end;
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.GRAY_800};
        }

    }

    img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }
`