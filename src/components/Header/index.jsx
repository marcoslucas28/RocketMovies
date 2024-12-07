import { Container, Profile } from './styles'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { Input } from '../Input'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Link } from 'react-router-dom'

export function Header({children}){
    const { signOut, user } = useAuth()
    const navigation = useNavigate()

    function handleSignOut(){
        navigation("/")
        signOut()
    }

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return(
        <Container>
            <h1>RocketMovies</h1>
            {children}

            <Profile>
                <div>
                    <strong>{user.name}</strong>
                    <span onClick={handleSignOut}>Sair</span>
                </div>
                <Link to="/profile">
                    <img src={avatarURL} alt={user.name} />
                </Link>
            </Profile>
        </Container>
    )
}