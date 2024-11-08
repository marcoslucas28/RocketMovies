import { Container, Author, Content, Informations, Tags, Title } from './styles'

import { MdOutlineWatchLater } from 'react-icons/md'

import { Header } from '../../components/Header'
import { LinkText } from '../../components/LinkText'
import { Rating } from '../../components/Rating'
import { Tag } from '../../components/Tag'

export function Details(){
    return(
        <Container>
            <Header />
            <Content>
                <Informations>
                    <LinkText />
                    
                    <Title>
                        <h1>Homem de Ferro</h1>
                        <Rating grade={4} />
                    </Title>

                    <Author>
                        <img src="https://github.com/marcoslucas28.png" alt="Foto do usuário" />
                        <span>Por Marcos Lucas</span>

                        <MdOutlineWatchLater />
                        <span>29/07/2024 às 08:00</span>
                    </Author>
                </Informations>
                
                <Tags>
                    <Tag name="Super-Heroi" />
                </Tags>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis repellat incidunt numquam quasi laborum dolor itaque. Debitis, voluptate! Numquam delectus officia alias corporis tenetur ipsam perspiciatis veritatis aspernatur voluptatum!</p>
            </Content>
        </Container>
    )
}