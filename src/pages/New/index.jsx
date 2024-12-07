import { Container, Content, Informations, Title, Buttons, Tags } from './styles'

import { Button } from '../../components/Button'
import { ButtonDelete } from '../../components/ButtonDelete'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { LinkText } from '../../components/LinkText'
import { TextArea } from '../../components/TextArea'
import { MovieItem } from '../../components/MovieItem'

import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { useState } from 'react'

export function New(){
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")
    const [description, setDescription] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const [loading, setLoading] = useState(false)

    function handleBack(){
        navigate(-1)
    }

    function handleAddTag(){
        setTags((prevState) => [...prevState, newTag])
        setNewTag("")
        console.log(tags)
    }

    function handleRemoveTag(deleted){
        setTags((prevState) => prevState.filter((tag) => tag !== deleted))
    }

    async function handleNewMovie(){
        setLoading(true)

        try{
            if(!title){
                return alert("Digite o título do filme")
            }

            const isRatingValid = rating >= 0 && rating <= 5

            if(!isRatingValid){
                return alert("A nota do filme deve ser entre 0 e 5")
            }

            if(newTag){
                return alert("Você deixou uma tag no campo para adicionar, adicione a tag ou deixe o campo vazio")
            }

            await api.post("/notes", {title, description, rating, tags})

            alert("Filme adicionado com sucesso!")
            navigate(-1)
        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else {
                alert("Não foi possivel adicionar o filme")
                console.log("Error ao adicionar filme:", error)
            }
        }finally {
            setLoading(false)
        }
    }

    function handleDiscardMovie(){
        const userConfirmation = confirm("Todas as informações serão perdidas. Tem certeza que deseja descarta-las?")

        if(userConfirmation){
            navigate(-1)
        }
    }

    return(
        <Container>
            <Header />
            <Content>
                <Title>
                    <LinkText onClick={handleBack} />
                    <h1>Novo Filme</h1>
                </Title>

                <Informations>
                    <Input placeholder="Título" onChange={(e) => setTitle(e.target.value)} />
                    <Input placeholder="Sua nota (0 a 5)" onChange={(e) => setRating(e.target.value)} />
                </Informations>

                <TextArea placeholder="Observações" onChange={(e) => setDescription(e.target.value)} />

                <Tags>
                    <h3>Marcadores</h3>

                    <div>

                        {
                            tags.map((tag, index) => (
                                <MovieItem key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)} />
                            ))}

                        <MovieItem isNew placeholder="Novo marcador" onChange={(e) => setNewTag(e.target.value)} value={newTag} onClick={handleAddTag} />
                        
                    </div>
                </Tags>

                <Buttons>
                    <ButtonDelete title="Excluir filme" onClick={handleDiscardMovie} />
                    <Button title="Salvar alterações" onClick={handleNewMovie} />
                </Buttons> 
            </Content>
        </Container>
    )
}