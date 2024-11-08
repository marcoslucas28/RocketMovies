import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled(Link)`
    color: ${({theme}) => theme.COLORS.PINK_800};
    font-size: 16px;
    display: flex;
    align-items: center;

    > svg {
        margin-right: 5px;
        width: 16px;
    }
`