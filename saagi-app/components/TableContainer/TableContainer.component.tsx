import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField,FormControl, Grid, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, styled } from '@mui/material'
import { Delete, Edit} from '@mui/icons-material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import { Component, useState } from 'react';

const myStyles = {
    header: {
        fontWeight: 700
    },
    navBar: {
        alignContent: "baseline",
        width: "99%",
        padding: "0 2%",
        searchBar: {
            width: 200,
        },
        filterBar: {
            width: "40%",
        },
    }
}

const IconButtn = styled(IconButton) ({
    width: 1,
    height: 1,
    marginTop: 20
})

interface DataType {
    id: Number;
    name: String;
    creator: String;
    description: String;
    jobsCount: String;
    status: String;
    
};



  
interface PropType { 
    dataP: DataType[];
    buttn: Component;
    iconAction: Component
}


const MyTable = ({data, buttn, iconAction}: PropType) => {

    const useStyles = myStyles

    const [checked1, setChecked1] = useState (false)
    const [checked2, setChecked2] = useState (false)
    const [checked3, setChecked3] = useState (false)

    const [année, setAnnée] = useState('')
    const [classe, setClasse] = useState('')
    const [module, setModule] = useState('')

    const [entry, setEntry] = useState('')

    const columns =  Object.keys(data[0])
    const rows = Object.entries(data)

    return (
        <>
            <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={useStyles.navBar}>
                {/* <TextField  
                 label="Search Organisations"
                 type= 'Search'
                 size='small'
                 sx={useStyles.navBar.searchBar}
                 onChange={(e) => setEntry(e.target.value)}
                /> 
                <Grid container justifyContent="center" sx={useStyles.navBar.filterBar}>
                    <Grid>
                        {checked1==false && (
                            <IconButtn onClick={_=> setChecked1(true)}>
                                <RadioButtonUncheckedIcon fontSize="small"/>
                            </IconButtn>
                        )}
                        {checked1==true && (
                            <IconButtn onClick={_=> setChecked1(false)}>
                                <RadioButtonCheckedIcon fontSize="small" color="secondary"/>
                            </IconButtn>
                        )}
                        <FormControl sx={{ m: 1, minWidth: 100}} size="small">
                            <InputLabel id="demo-select-small" >Année</InputLabel>
                            <Select
                             label="Année"
                             onChange={(event: SelectChangeEvent) =>{setAnnée(event.target.value); setChecked1(true)}}
                             value={année}
                             size="small"
                            >
                                {dataAn.map((e) => (
                                    <MenuItem value={e.année}>{e.année}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid>
                        {checked2==false && (
                            <IconButtn onClick={_=> setChecked2(true)}>
                                <RadioButtonUncheckedIcon fontSize="small"/>
                            </IconButtn>
                        )}
                        {checked2==true && (
                            <IconButtn onClick={_=> setChecked2(false)}>
                                <RadioButtonCheckedIcon fontSize="small" color="secondary"/>
                            </IconButtn>
                        )}
                        <FormControl sx={{ m: 1, minWidth: 100}} size="small">
                            <InputLabel id="demo-select-small" >Classe</InputLabel>
                            <Select
                             label="Classe"
                             onChange={(event: SelectChangeEvent) =>{setClasse(event.target.value); setChecked2(true)}}
                             value={classe}
                             size="small"
                            >
                                {dataCl.map((e) => (
                                    <MenuItem value={e.name}>{e.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid>
                        {checked3==false && (
                            <IconButtn onClick={_=> setChecked3(true)}>
                                <RadioButtonUncheckedIcon fontSize="small"/>
                            </IconButtn>
                        )}
                        {checked3==true && (
                            <IconButtn onClick={_=> setChecked3(false)}>
                                <RadioButtonCheckedIcon fontSize="small" color="secondary"/>
                            </IconButtn>
                        )}
                        <FormControl sx={{ m: 1, minWidth: 120}} size="small">
                            <InputLabel id="demo-select-small" >Module</InputLabel>
                            <Select
                             label="Module"
                             onChange={(event: SelectChangeEvent) =>{setModule(event.target.value); setChecked3(true)}}
                             value={module}
                             size="small"
                            >
                                {dataMd.map((e) => (
                                    <MenuItem value={e.name}>{e.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                </Grid> */}
                <Grid>{buttn}</Grid>
            </Grid>
            <TableContainer sx={useStyles}>
                    <Table>
                        <TableHead >
                            <TableRow>
                                {columns.map((e: String) => 
                                    <TableCell sx={useStyles.header}>{e}</TableCell>
                                )}
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        
                        <TableBody>
                            {data.map((row: any) => {
                                        return(
                                            <TableRow>
                                                {columns.map(column =>
                                                    <TableCell>{row [column]}</TableCell> 
                                                )}
                                                <TableCell>{iconAction}</TableCell>
                                            </TableRow>
                                        )
                                    }
                                )
                            }
                        </TableBody>
                    </Table>
            </TableContainer>
        </>
    )
}

export default MyTable



// filter((e) => {
//     if (entry=="") {
//         return e;
//     }else if(e.name.toLowerCase().includes(entry.toLowerCase())) {  
//         return e
//     }}).filter((x) => {
//         if (checked1===false) {
//             return x
//         }else if(x.année===année) {
//             return x
//         }}
//         ).filter((y) => {
//             if (checked2===false) {
//                 return y
//             }else if(y.classe===classe) {
//                 return y
//             }}
//         ).filter((z) => {
//             if (checked3===false) {
//                 return z
//             }else if(z.module===module) {
//                 return z
//             }}
//         ).