import { Container, Bacground, Form } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { api } from '../../services/api'

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SingUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("preencha todos os campos")
        }

        setLoading(true)

        api.post("/users", { name, email, password }).then(() => {
            alert("usuário cadastrado com sucesso!")
            navigate(-1)
        }).catch((error) => {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possivel cadastrar o usuário")
            }
        }).finally(() => setLoading(false))
    }

    return(
        <Container>
                <Form>
                    <h1>RocketNotes</h1>
                    <p>Aplicação para acompanhar tudo que assistir</p>

                    <h2>Crie sua conta</h2>

                    <Input icon={FiUser} placeholder="Nome" onChange={(e) => setName(e.target.value)} />
                    <Input icon={FiMail} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                    <Input icon={FiLock} placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />

                    <Button title="Entrar" onClick={handleSignUp} disabled={loading} />

                    <Link to="/"><FiArrowLeft /> Voltar para login</Link>
                </Form>
            <Bacground />
        </Container>
    )
}