import { Container, Stack, styled, Typography } from "@mui/material";
import Note from "./Note";

// testes 
import Conteudo from '../../public/json/notas.json';
const notas = Conteudo.notas;

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
    return (
        <Container maxWidth='lg' >
            <Title>Favoritas</Title>
            <ItensStack direction='row' spacing={2} useFlexGap flexWrap='wrap' >
                {notas.map(nota => {
                    if(nota.favorite){
                        return<Note nota={nota}></Note>
                    }
                    })
                }
            </ItensStack>

            <Title>Outras</Title>
            <ItensStack direction='row' spacing={2} useFlexGap flexWrap='wrap' >
                {notas.map(nota => {
                    if(!nota.favorite){
                        return<Note nota={nota}></Note>
                    }
                    })
                }
            </ItensStack>

        </Container>
    )
}


export default Holding;