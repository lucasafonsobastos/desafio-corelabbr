import * as React from "react";
import { Box, Button, IconButton, InputBase, styled } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';


const EditNota = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '1px 1px 5px #D9D9D9',
    borderRadius: '25px',
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



function NewNote(){

    const [favorite, setFavorite] = React.useState<null | HTMLElement>(null);
    const [titleNote, setTitleNote] = React.useState<null | HTMLTextAreaElement>(null);
    const [textNote, setTextNote] = React.useState<null | HTMLTextAreaElement>(null);

    const onChangeTitleNote = (event: React.ChangeEvent) => {
        setTitleNote(event.currentTarget.value)
    }

    const onChangeTextNote = (event: React.ChangeEvent) => {
        setTextNote(event.currentTarget.value)
    }

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

    return (
        <>
            <EditNota>
                <Box sx={{
                    display: 'flex', alignItems: 'center', padding: '.2rem 1rem', justifyContent: 'space-between'
                }}>
                    <InputBase value={titleNote} onChange={onChangeTitleNote} placeholder="Título" sx={{
                        padding: '0 .5rem', width: '100%', textTransform:'uppercase'
                    }}>
                    </InputBase>
                    <BtFavorite onClick={handleFavorite}>
                        {isFavorite()}
                    </BtFavorite>
                </Box>
                <Line></Line>
                <Box>
                    
                    <InputBase value={textNote} onChange={onChangeTextNote} multiline placeholder="criar nota..." sx={{
                        padding: '0.5rem 1rem', fontSize: 'smaller', width: '100%',
                    }}>
                    </InputBase>
                </Box>
                {textNote &&
                    <IconButton aria-label="Adicionar Nota" sx={{alignSelf:'flex-end'}}>
                        <AddIcon sx={{color:'#20f920'}}></AddIcon>
                    </IconButton>
                }
            </EditNota>
        </>
    )
}

export default NewNote;