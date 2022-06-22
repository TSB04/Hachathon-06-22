import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid, Typography } from '@mui/material'
import { Component} from 'react';

const myStyles = {
    header: {
        fontWeight: 700
    },
    tabHead: {
        backgroundColor: "lightGrey"
    },
    text: {
        fontWeight: 700,
        fontSize: 20,
    }
}


interface DataType {
    id: Number;
    name: String;
    creator: String;
    description: String;
    jobsCount: String;
    status: String;
    
};



  
interface PropType { 
    data: DataType[];
    buttn: Component;
    iconAction: Component;
    page: String;
}


const MyTable = ({data, buttn, iconAction, page}: PropType) => {

    const useStyles = myStyles

    const columns =  Object.keys(data[0])

    return (
        <>
            <Grid container direction="row" justifyContent="space-between">
                <Typography sx={useStyles.text}>{page}</Typography>
                {buttn}
            </Grid>
            <TableContainer sx={useStyles}>
                    <Table>
                        <TableHead sx={useStyles.tabHead}>
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
