import { Container } from './styles'

export function Button({title, disabled = false, icon: Icon, ...rest}){
    return(
        <Container disabled={disabled} type="button" {...rest}>
            {Icon && <Icon />}
            {title}
        </Container>
    )
}