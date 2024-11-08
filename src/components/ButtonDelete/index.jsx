import { Container } from './styles'

export function ButtonDelete({title, icon: Icon, ...rest}){
    return(
        <Container type="button" {...rest}>
            {Icon && <Icon />}
            {title}
        </Container>
    )
}