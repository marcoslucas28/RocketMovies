import { Container, Bacground, Form } from './styles'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SingIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const { signIn } = useAuth()

    function handleSignIn(){
        setLoading(true)
        signIn({email, password}).finally(() => setLoading(false))
    }

    return(
        <Container>
                <Form>
                    <h1>RocketNotes</h1>
                    <p>Aplicação para acompanhar tudo que assistir</p>

                    <h2>Faça seu login</h2>

                    <Input icon={FiMail} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                    <Input icon={FiLock} placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />

                    <Button title="Entrar" onClick={handleSignIn} disabled={loading} />

                    <Link to="/register">Criar conta</Link>
                </Form>
            <Bacground />
        </Container>
    )
}