import { Container, Content, Details, Movies } from './styles'

import { Link } from 'react-router-dom'

import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Movie } from '../../components/Movie'
import { Tag } from '../../components/Tag'

export function Home(){
    return(
        <Container>
            <Header />
            <Content>
                <Details>
                    <p>Meus filmes</p>
                    <div><Button icon={FiPlus} title="Adicionar filme"  /></div>
                </Details>

                <Movies>
                    <Movie data={{
                        title: 'Homem de Ferro',
                        grade: 4,
                        tags: [{name: 'super-heroi', id: '1'}, {id: '2', name: 'Pop'}],
                        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ratione repudiandae accusantium vero alias consequatur architecto dolor, iusto fugit fugiat necessitatibus iste corrupti, optio amet! Natus cum nisi omnis quam?'
                    }} />
                </Movies>
            </Content>
        </Container>
    )
}