import { Container } from './styles'

import { FiArrowLeft } from 'react-icons/fi'

export function LinkText(){
    return(
        <Container to="/">
            <FiArrowLeft />
            Voltar
        </Container>
    )
}