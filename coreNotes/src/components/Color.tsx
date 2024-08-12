import * as React from 'react';
import { Box, Dialog, styled, Stack, IconButton } from "@mui/material";

export interface ColorProps{
    open: boolean;
    selectedValue: number;
    onClose: (value: number) => void;
    cores: any[];
}

const CoresSpan = styled(Box)(() => ({
    width: '30px',
    height: '30px',
    borderRadius: '100%',

}));



const ItemCor = styled(IconButton)(() => ({
    padding: '2px',
    ':hover': {
        border: '-1px solid gray',
    },
}))


function Color(props: ColorProps) {

    const {onClose, selectedValue, open, cores} = props;

    const handleCLose = () => {
        onClose(selectedValue);
        
    }

    const handleListItemClick = (value:number) => {
        onClose(value);
        console.log(value);
    }

    return (
        <Dialog onClose={handleCLose} open={open} >
            <Stack spacing={{xs: 1, sm: 2}} 
            direction='row' useFlexGap flexWrap='wrap'
            sx={{ display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                {cores.map((item)=> {
                    return <ItemCor 
                        key={item.cor} onClick={() => handleListItemClick(item.id)} >
                            <CoresSpan sx={{backgroundColor: item.cor}}/>
                    </ItemCor>
                })}
            </Stack>
        </Dialog>
    )
}

export default Color;