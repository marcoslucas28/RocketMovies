import { Container, Wraper } from './styles'

import { Tag } from '../Tag/index'
import { Rating } from '../../components/Rating'

export function Movie({data, ...rest}){

    return(
        <Container {...rest}>
            <Wraper>
                    <h3>{data.title}</h3>
                    <Rating grade={data.rating} />
                </Wraper>

                <p>{data.description}</p>

                {
                    data.tags && 
                    <footer>
                        {
                            data.tags.map(tag => (<Tag key={tag.id} name={tag.name} />))
                        }
                    </footer>
                }
        </Container>
    )
}