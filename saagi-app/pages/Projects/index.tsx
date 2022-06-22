import { IconButton } from '@mui/material';
import type { NextPage } from 'next'
import Link from 'next/link';
import MyTable from '../../components/TableContainer/TableContainer.component';
import data from '../api/data.json'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddCircleIcon from '@mui/icons-material/AddCircle';




const Projects : NextPage = () => {
    return (
        <MyTable
            page={"Mes Projets"}
            data={data.projects}
            buttn={
              <Link href={''}>
                <IconButton>
                  <AddCircleIcon color='primary' fontSize='large'/>
                </IconButton>
              </Link>
            }
            iconAction={
                <Link href={'/Jobs'}>
                    <IconButton>
                        <ArrowForwardIcon color='secondary'/>
                    </IconButton>
                </Link>
            }
        />
    )
}

export default Projects;