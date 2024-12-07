import { Container, Form, Avatar, Header } from './styles'


import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'


import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { LinkText } from '../../components/LinkText'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'

export function Profile(){
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarURL)
    const [avatarFile, setAvatarFile] = useState(null)

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    function handleBack(){
        navigate(-1)
    }

    async function handleUpdate(){
        setLoading(true)

        try{
            const updated = {
                name,
                email,
                password: passwordNew,
                old_password: passwordOld
            }

            const userUpdated = Object.assign(user, updated)

            await updateProfile({user: userUpdated, avatarFile})
        } catch(error){
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possivel atualizar o perfil")
            }
        } finally {
            setLoading(false)
        }
    }

    function handleChageAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return(
        <Container>
            <Header>
                <LinkText onClick={handleBack} />
            </Header>

            <Form>
                <Avatar>
                    <img src={avatar} alt={user.name} />
                    <label htmlFor="user-photo">
                        <FiCamera />
                        <input type="file" id="user-photo" accept='image/png, image/jpeg' onChange={handleChageAvatar} />
                    </label>
                </Avatar>

                <Input icon={FiUser} placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                <Input icon={FiMail} placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />

                <Input icon={FiLock} placeholder="Senha atual" onChange={(e) => setPasswordOld(e.target.value)} />
                <Input icon={FiLock} placeholder="Nova senha" onChange={(e) => setPasswordNew(e.target.value)} />

                <Button title="Salvar" onClick={handleUpdate} disabled={loading} />
            </Form>
        </Container>
    )
}