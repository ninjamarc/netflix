import React, { useState, useEffect } from 'react'
import {DataGrid} from '@material-ui/data-grid'
import axios from './axios';
import requests from './requests';
import './Datatable.css'

const columns = [
    {field: 'id', headerName: 'ID'},
    {field: 'title', headerName: 'TITLE', width: 300 },
    {field: 'media_type', headerName: 'TYPE', width: 200},
    {field: 'release_date', headerName: 'RELEASE DATE', width: 200},
    {field: 'vote_average', headerName: 'AVERAGE VOTES', width: 200},
    {field: 'vote_count', headerName: 'VOTE COUNT', width: 200}

]

function Datatable({title, fetchUrl}) {

    const [tableData, setTableData] = useState([])

     useEffect(() => {
         async function fetchData() {
             const request = await axios.get(requests.fetchTrending);
             setTableData(request.data.results)
             console.log(tableData)
             return request
            
         }
         fetchData()
    }, [])

    return (
        <div className='datatable' style={{ height: 900, width: '100%' }}>
            <DataGrid 
                className='datagrid'
                rows={tableData}
                columns={columns}
                pageSize={15}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable
