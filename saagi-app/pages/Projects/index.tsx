import { IconButton } from '@mui/material';
import type { NextPage } from 'next'
import Link from 'next/link';
import MyTable from '../../components/TableContainer/TableContainer.component';
// import data from '../api/data.json'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from 'react';




const Projects : NextPage = () => {

    const [data, setData] = useState ()

    useEffect(()=>{
        fetch("/projet").then(
          res=>res.json()
        ).then(
          data=>{
            setData(data)
            console.log(data)
          }
        )
      },[])



    return (
        <MyTable
            data={data.projects}
            iconAction={
                <Link href={'/Jobs'}>
                    <IconButton>
                        <ArrowForwardIcon color='primary'/>
                    </IconButton>
                </Link>
            }
        />
    )
}

export default Projects;