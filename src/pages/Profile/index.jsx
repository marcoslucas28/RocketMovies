import { Container, Form, Avatar, Header } from './styles'


import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'


import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { LinkText } from '../../components/LinkText'

export function Profile(){
    return(
        <Container>
            <Header>
                <LinkText to="/" />
            </Header>

            <Form>
                <Avatar>
                    <img src="https://github.com/marcoslucas28.png" alt="Foto do usuário" />
                    <label htmlFor="user-photo">
                        <FiCamera />
                        <input type="file" id="user-photo" accept='image/png, image/jpeg' />
                    </label>
                </Avatar>

                <Input icon={FiUser} placeholder="Nome" />
                <Input icon={FiMail} placeholder="E-mail" />

                <Input icon={FiLock} placeholder="Senha atual" />
                <Input icon={FiLock} placeholder="Nova senha" />

                <Button title="Salvar" />
            </Form>
        </Container>
    )
}