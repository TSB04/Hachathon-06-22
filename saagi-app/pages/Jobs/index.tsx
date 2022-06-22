import type { NextPage } from 'next'
import MyTable from '../../components/TableContainer/TableContainer.component';
import data from '../api/dataj.json'
const Jobs : NextPage = () => {
    return (
        <MyTable
            data={data.jobs}
        />
    )
}

export default Jobs;