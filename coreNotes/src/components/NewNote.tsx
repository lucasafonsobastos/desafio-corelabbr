import * as React from "react";
import { Alert, Box, IconButton, InputBase, styled } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
import { createNota } from "../services/notaService";
//import { useNotasContext } from "./NotasContext";


const EditNota = styled('form')(() => ({
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '1px 1px 5px #D9D9D9',
    borderRadius: '20px',
    minHeight: '105px',
    width: '70%',
    maxWidth: '530px',
    overflow: 'hidden',
    backgroundColor:'#FFFFFF'
}));

const Line = styled('span')(() => ({
    width: '100%',
    height: '2px',
    backgroundColor: 'rgba(0,0,0, 0.2)',
}));

const BtFavorite = styled('div')(() => ({

}));



function NewNote( {onAddNota }:{onAddNota: (nota:any) => void}){
    //const { notas, setNotas } = useNotasContext();

    const [favorite, setFavorite] = React.useState(false);
    const [titleNote, setTitleNote] = React.useState('');
    const [textNote, setTextNote] = React.useState('');

    //const [alert, setAlert] = React.useState(false);


    const handleFavorite = () => {
        //setFavorite(true);
        if(favorite){
            setFavorite(false);
        } else {
            setFavorite(true);
        }

    }

    const isFavorite = () => {
        if(favorite){
            return (<StarIcon sx={{color:'#FFA000'}}></StarIcon>)
        } else {
            return (<StarBorderIcon ></StarBorderIcon>)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // verificar se nao tem nenhuma opção vazia...
            if(titleNote == '' || textNote == ''){
                <Alert severity="warning">Sua Nota esta sem TÍTULO ou se CONTEUDO para ser salvo. Revise-a!</Alert>
            } else {
                const novaNota = await createNota(titleNote, textNote, 0, favorite);
                onAddNota(novaNota);
                setTitleNote('');
                setTextNote('');
                setFavorite(false);
            }

        } catch (error) {
            console.error('Erro ao criar nota', error);
            <Alert severity="error">Erro ao criar a nota.</Alert>
        }
    }

    return (
        <>
            <EditNota onSubmit={handleSubmit}>
                <Box sx={{
                    display: 'flex', alignItems: 'center', padding: '.2rem 1rem', justifyContent: 'space-between'
                }}>
                    <InputBase value={titleNote} 
                        onChange={(e) => setTitleNote(e.target.value)} 
                        placeholder="Título" 
                        sx={{
                            padding: '0 .5rem', width: '100%', textTransform:'uppercase'
                        }}>
                    </InputBase>
                    <BtFavorite onClick={handleFavorite}>
                        {isFavorite()}
                    </BtFavorite>
                </Box>
                <Line></Line>
                <Box>
                    
                    <InputBase value={textNote} 
                        onChange={(e) => setTextNote(e.target.value)} 
                        multiline placeholder="criar nota..." 
                        sx={{
                            padding: '0.5rem 1rem', fontSize: 'smaller', width: '100%',
                        }}>
                    </InputBase>
                </Box>
                {textNote &&
                    <IconButton type="submit" 
                        aria-label="Adicionar Nota" 
                        sx={{alignSelf:'flex-end'}}>

                        <AddIcon sx={{color:'#20f920'}}></AddIcon>
                    </IconButton>
                }
            </EditNota>
        </>
    )
}

export default NewNote;