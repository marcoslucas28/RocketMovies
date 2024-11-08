import { Container } from './styles'

import { VscStarFull, VscStarEmpty } from 'react-icons/vsc'

export function Rating({grade, ...rest}){
    let start = []

    for (let i = 0; i < 5; i++) {
        (i < grade) ? start.push(<VscStarFull key={i}/>) : start.push(<VscStarEmpty key={i} />)
    }

    return <Container {...rest}> {start} </Container>
}