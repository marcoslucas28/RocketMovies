import { Container, Author, Content, Informations, Tags, Title } from './styles'

import { MdOutlineWatchLater } from 'react-icons/md'

import { Header } from '../../components/Header'
import { LinkText } from '../../components/LinkText'
import { Rating } from '../../components/Rating'
import { Tag } from '../../components/Tag'

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import moment from 'moment-timezone'

export function Details(){
    const [data, setData] = useState({})

    const params = useParams()

    const { user } = useAuth()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const formattedDate = moment.utc(data.updated_at).tz("America/Sao_Paulo").format("DD/MM/YYYY HH:mm:ss")

    const navigate = useNavigate()

    function handleBack(){
        navigate(-1)
    }

    useEffect(() => {
        async function fetchMovie(){
            const response = await api.get(`/notes/${params.id}`)
            setData(response.data)
        }

        fetchMovie()
    }, [])

    return(
        <Container>
            <Header />
            { data && (
            <Content>
                <Informations>
                    <LinkText onClick={handleBack} />
                    
                    <Title>
                        <h1>{data.title}</h1>
                        <Rating grade={data.rating} />
                    </Title>

                    <Author>
                        <img src={avatarURL} alt={user.name} />
                        <span>Por {user.name}</span>

                        <MdOutlineWatchLater />
                        <span>{formattedDate}</span>
                    </Author>
                </Informations>
                
                {data.tags && (
                    <Tags>
                        {data.tags.map((tag) => (
                            <Tag key={String(tag.id)} name={tag.name} /> 
                        ))}
                    </Tags>
                )}

                <p>{data.description}</p>
            </Content>)}
        </Container>
    )
}