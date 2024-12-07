import { Container } from './styles'

import { FiArrowLeft } from 'react-icons/fi'

export function LinkText({onClick}){

    return(
        <Container onClick={onClick}>
            <FiArrowLeft />
            Voltar
        </Container>
    )
}