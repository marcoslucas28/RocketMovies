import { Container, Profile } from './styles'

import { Input } from '../Input'

import { Link } from 'react-router-dom'

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>
            <Input placeholder="Pesquisar pelo título" />

            <Profile>
                <div>
                    <strong>Marcos Lucas</strong>
                    <span>Sair</span>
                </div>
                <Link to="/profile">
                    <img src="https://github.com/marcoslucas28.png" alt="Foto do usuário" />
                </Link>
            </Profile>
        </Container>
    )
}