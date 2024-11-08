import styled from 'styled-components'


export const Container = styled.div`
    background-color: #FF859B30;
    padding: 10px;
    margin-bottom: 10px;
    width: 100%;
    border-radius: 15px;


    > p {
        margin: 10px 0;
        color: ${({theme}) => theme.COLORS.GRAY_700};
        font-size: 16px;
    }

    > footer {
        align-self: end;
        padding: 20px 0;
    }
`

export const Wraper = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: start;

    > h3 {
        color: ${({theme}) => theme.COLORS.WHITE_800};
        font-size: 24px;
    }
`