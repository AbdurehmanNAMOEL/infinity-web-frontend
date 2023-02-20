import { Box } from '@mui/material'
import { DataGrid,GridToolbar } from '@mui/x-data-grid'
import React from 'react'

const GridTable = ({colors,data,columnFieldsList}) => {
  return (
    <Box sx={[style.gridDataContainer,{   
        "& .name-column-cell":{
           color:'#121212'
        },
     }]}>
        <DataGrid
        components={{Toolbar:GridToolbar}}
        sx={{color:'#121212',headerStyle:{backgroundColor:'blue'}}}
        rows={data}
        columns={columnFieldsList}
        />
    </Box>
  )
}
const style= {
    gridDataContainer:{
     m:'20px 0 0 0',
        height:'74vh',
        "& .MuiDataGrid-root":{
            border:'none'
        },
        "& .MuiDataGrid-cell":{
            borderBottom:'none'
        },
          "& .MuiDataGrid-columnHeaders":{
           backgroundColor:"rgb(9, 92, 201)"
        },
         "& .MuiDataGrid-footerContainer":{
           backgroundColor:"rgb(9, 92, 201)",
           color:'#121212'
        },
        
    }
}
export default GridTable