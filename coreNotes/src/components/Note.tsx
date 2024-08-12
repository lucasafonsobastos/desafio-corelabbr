import * as React from "react";
import { Box, IconButton, styled, TextField, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import OptionsNote from "./OptionsNote";

import { getCores, updateNota } from "../services/notaService";

export interface NotaProps {
    nota:any,
    onDelete: (id:number) => void,
    onUpdate: (notaAtualizada: any) => void,
}

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

const TextConteudo = styled(TextField)(() => ({
    display:'flex',
    backgroundColor:'transparent',
}));

function Note (props: NotaProps) {

    const {nota, onDelete, onUpdate} = props;
    //onAtualiza = Objeto{...}

    const [cores, setCores] = React.useState<any[]>([]);
    const [newCor, setNewCor] = React.useState<number>(0);

    const [favorite, setFavorite] = React.useState(nota.favorito);

    const notaAtualizada = nota;

    //carrega as cores estabelecidas
    const fetchCores = async () => {
        try {
            const data = await getCores();
            setCores(data);
        } catch (error) {
            console.error('Erro ao buscar cores:', error);
        }
    };

    React.useEffect(() => {
        fetchCores();
    }, []);

    const fetchUpdateCor = async (novaCor: number) => {
        notaAtualizada.cor_id = novaCor;
        fetchAtualiza();
    };

    const fetchAtualiza = async () => {
        try {
            await updateNota(notaAtualizada);
            onUpdate(notaAtualizada);
            
        } catch (error) {
            console.error('Erro ao atualizar a nota:', error);
        }
    };

    const handleFavorito = () =>{
        if(favorite){
            setFavorite(false);
            notaAtualizada.favorito = false;
        } else {
            setFavorite(true);
            notaAtualizada.favorito = true
        }
        fetchAtualiza();
    }

    const corAtual = cores.find(cor => cor.id === nota.cor_id)?.cor || '';

    return (
        <BlocoNota sx={{backgroundColor:corAtual}}>
            <Box sx={{
                display: 'flex', 
                alignItems: 'center', 
                padding: '.2rem 1rem', 
                justifyContent: 'space-between'
            }}>
                <Typography sx={{
                    padding: '0 .5rem', width: '100%'
                }}> {nota.titulo}
                </Typography>
                <IconButton onClick={handleFavorito}>
                    {nota.favorito ? <StarIcon sx={{color:'#FFA000'}} /> : <StarBorderIcon/>}
                </IconButton>

            </Box>
            {corAtual != '' ? <Line sx={{backgroundColor:'#FFFFFF'}} /> : <Line/> }
            <Box sx={{height:'70%'}}>
                <TextConteudo>
                    {nota.conteudo}
                </TextConteudo>
            </Box>
            <OptionsNote 
                cores={cores} 
                notaId={nota.id} 
                attCor={setNewCor}
                onDelete={onDelete}
                attNota={fetchUpdateCor}>
            </OptionsNote>
            
        </BlocoNota>
    )
}


export default Note;