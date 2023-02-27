import { Box } from '@mui/material'
import { DataGrid,GridToolbar } from '@mui/x-data-grid'
import React from 'react'
import { useSelector } from 'react-redux'

const GridTable = ({colors,data,columnFieldsList}) => {
     const {isLightMode}= useSelector(state=>state.auth)
  return (
    <Box sx={[style.gridDataContainer,{   
        "& .name-column-cell":{
           color:`${isLightMode?'#1E1E1E':'white'}`
        },
     }]}>
        <DataGrid
        components={{Toolbar:GridToolbar}}
        sx={{color:`${isLightMode?'#1E1E1E':'white'}`,headerStyle:{backgroundColor:'blue'}}}
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