import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 1000px;
    margin: 0 auto;
`

export const Details = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    > p {
        font-size: 32px;
        color: #FFFFFF;
    }

    > div {
        width: 250px;
    }
`

export const Movies = styled.div`
    width: 100%;
    overflow-y: auto;
`


