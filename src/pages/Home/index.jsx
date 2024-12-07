import { Container, Content, Details, Movies } from './styles'

import { Link } from 'react-router-dom'

import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Movie } from '../../components/Movie'
import { Tag } from '../../components/Tag'
import { Input } from '../../components/Input'

import { useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react'

import { api } from '../../services/api'

export function Home(){
    const navigate = useNavigate()

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")

    function goToNewNote(){
        navigate("/new")
    }

    function handleDetails(id){
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchMovies(){
            const response = await api.get(`/notes?title=${search}`)
            setMovies(response.data)
        }

        fetchMovies()
    }, [search])

    return(
        <Container>
            <Header>
                <Input placeholder="Pesquisar pelo título" onChange={(e) => setSearch(e.target.value)} />
            </Header>
            <Content>
                <Details>
                    <p>Meus filmes</p>
                    <div><Button icon={FiPlus} title="Adicionar filme" onClick={goToNewNote}  /></div>
                </Details>

                <Movies>
                    {movies.map((movie) => (
                        <Movie key={movie.id} data={movie} onClick={() => handleDetails(movie.id)} />
                    ))}
                </Movies>
            </Content>
        </Container>
    )
}