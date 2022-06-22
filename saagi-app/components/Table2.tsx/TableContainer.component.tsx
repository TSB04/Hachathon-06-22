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
    id: String;
    name: String;
    alerting: String;
    countJobInstance: Number;
    creationDate: String;
    cronScheduling: String;
    description: String;
    graphPipelines: [];
    instances: [];
    isDeletable: Boolean;
    isScheduled: Boolean;
    isStreaming: Boolean;
    migrationProjectId: String;
    migrationStatus: String;
    pipelines: [];
}



  
interface PropType { 
    data: DataType[];
    iconAction: Component;
}


const MyTable = ({data, iconAction}: PropType) => {

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