import { Container, Bacground, Form } from './styles'
import { Link } from 'react-router-dom'


import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SingUp(){
    return(
        <Container>
                <Form>
                    <h1>RocketNotes</h1>
                    <p>Aplicação para acompanhar tudo que assistir</p>

                    <h2>Crie sua conta</h2>

                    <Input icon={FiUser} placeholder="Nome" />
                    <Input icon={FiMail} placeholder="E-mail" />
                    <Input icon={FiLock} placeholder="Senha" />

                    <Button title="Entrar" />

                    <Link to="/"><FiArrowLeft /> Voltar para login</Link>
                </Form>
            <Bacground />
        </Container>
    )
}