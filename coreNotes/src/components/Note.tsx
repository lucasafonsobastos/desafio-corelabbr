import * as React from "react";
import { Box, IconButton, styled, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import EditIcon from '@mui/icons-material/Edit';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ClearIcon from '@mui/icons-material/Clear';

//testes
import Conteudo from '../../public/json/notas.json';
const cores = Conteudo.cores;

const BlocoNota = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '1px 1px 5px #D9D9D9',
    borderRadius: '15px',
    minHeight: '280px',
    width: '240px',
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

const ColorNote = styled('span')(() =>({
    width:'2.1rem', height:'2.1rem',
    borderRadius:'100%',
    alignItems:'center',
}));

const bkCor = (id) =>{
    cores.map()
}

function Note ({nota}) {

    return (
        <BlocoNota>
            <Box sx={{
                display: 'flex', alignItems: 'center', padding: '.2rem 1rem', justifyContent: 'space-between'
            }}>
                <Typography sx={{
                    padding: '0 .5rem', width: '100%'
                }}> {nota.title}
                </Typography>
                <BtFavorite>
                    {nota.favorite ? <StarIcon sx={{color:'#FFA000'}} /> : <StarBorderIcon/>}
                </BtFavorite>
            </Box>
            <Line></Line>
            <Box sx={{height:'70%'}}>
                <Typography sx={{
                    padding: '.5rem', 
                    fontSize: 'small', 
                    opacity:'0.6',
                    textAlign:'justfy'
                }}>
                    {nota.text}
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems:'center', 
                justifyContent: 'space-between',
            }}>
                <Box>
                    <IconButton><EditIcon></EditIcon></IconButton>
                    <IconButton>
                        <ColorNote>
                            <FormatColorFillIcon></FormatColorFillIcon>
                        </ColorNote>
                    </IconButton>
                </Box>
                <IconButton><ClearIcon></ClearIcon></IconButton>
            </Box>
        </BlocoNota>
    )
}


export default Note;