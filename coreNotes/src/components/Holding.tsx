import * as React from 'react';
import { Box, Container, Stack, styled, Typography } from "@mui/material";
import Note from "./Note";
import NewNote from './NewNote';
import { useNotasContext } from './NotasContext';
import { getNotas, deleteNote } from "../services/notaService";

/* 
//testes 
import Conteudo from '../../public/json/notas.json';
const notas = Conteudo.notas;
*/

const ItensStack = styled(Stack)(() =>({
    display:'flex',
    justifyContent:'center',
    width:'100%'
}));

const Title = styled(Typography)(() => ({
    fontSize:'small',
    margin:'.5rem 0'
}));



function Holding() {
    const { notas, setNotas } = useNotasContext();

    const fetchNotas = async () => {
        try {
            const data = await getNotas();
            setNotas(data);
        } catch (error) {
            console.error('Erro ao buscar notas:', error);
        }
    };

    React.useEffect(() => {
        fetchNotas();
    }, []);

    const removeNota = async (id:number) => {
        try {
            await deleteNote(id);
            setNotas((prevNotas:any) => prevNotas.filter((nota:any) => nota.id !== id));
        } catch (error) {
            console.error('Erro ao excluir nota:', error)
        }
    }

    //atualiza as notas na view
    const attNota = async (_novaNota: any) => {
        await fetchNotas();
    }

    return (
        <>
            <Box sx={{
                marginTop: '5rem',
                display: 'flex' , 
                alignContent: 'center', 
                justifyContent: 'center'}}>
            <NewNote onAddNota={attNota} ></NewNote>
            </Box>

            <Container maxWidth="lg">
                <Title>Favoritas</Title>
                <ItensStack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                    {notas.map((nota: any) => (
                        nota.favorito ? <Note key={nota.id} 
                        nota={nota} onDelete={removeNota} 
                        onUpdate={attNota} /> : ''
                    ))}
                </ItensStack>

                <Title>Outras</Title>
                <ItensStack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                    {notas.map((nota: any) => (
                        !nota.favorito ? <Note key={nota.id} 
                        nota={nota} onDelete={removeNota} 
                        onUpdate={attNota}/> : ''
                    ))}
                </ItensStack>
            </Container>
        </>
    );
}

export default Holding;