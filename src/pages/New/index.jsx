import { Container, Content, Informations, Title, Buttons, Tags } from './styles'

import { Button } from '../../components/Button'
import { ButtonDelete } from '../../components/ButtonDelete'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { LinkText } from '../../components/LinkText'
import { TextArea } from '../../components/TextArea'
import { MovieItem } from '../../components/MovieItem'

export function New(){
    return(
        <Container>
            <Header />
            <Content>
                <Title>
                    <LinkText />
                    <h1>Novo Filme</h1>
                </Title>

                <Informations>
                    <Input placeholder="Título" />
                    <Input placeholder="Sua nota (0 a 5)" />
                </Informations>

                <TextArea placeholder="Observações"/>

                <Tags>
                    <h3>Marcadores</h3>

                    <div>
                        <div><MovieItem value="React"/></div>
                        <div><MovieItem  isNew/></div>
                        
                    </div>
                </Tags>

                <Buttons>
                    <ButtonDelete title="Excluir filme" />
                    <Button title="Salvar alterações" />
                </Buttons> 
            </Content>
        </Container>
    )
}