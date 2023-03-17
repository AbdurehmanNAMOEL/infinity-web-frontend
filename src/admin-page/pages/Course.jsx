import { Box } from '@mui/material'
import React from 'react'
import GridTable from '../components/GridTable'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import { mockDataTeam } from '../DummyData/data'

const CourseRegistration = ({ closeDrawer, isDrawerOpen }) => {
    const column = [
        { field: "id", headerName: "ID" },
        { field: "name", headerName: "Name", flex: 1, cellClassName: 'name-column-cell' },
        { field: "age", headerName: "Age", type: "number", headerAlign: 'left', align: 'left' },
        { field: "phone", headerName: "Phone Number", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "access", headerName: "Access" },
    ]
    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', height: { md: '100vh', sm: 'auto' } }}>
            <SideBar
                isDrawerOpen={isDrawerOpen}
                closeDrawer={closeDrawer}
                drawerWidth={isDrawerOpen ? 200 : 0}
            />
            <Box sx={{ display: 'flex', width: '100%', position: 'relative', flexDirection: 'column' }}>
                <Box sx={{ position: 'fixed', width: `${isDrawerOpen ? 100 : 100}%`, zIndex: 200 }}>
                    <Header closeDrawer={() => closeDrawer(prev => !prev)} />
                </Box>
                <Box sx={{ width: '90%', marginLeft: '5%', marginTop: '80px' }}>

                    <GridTable
                        colors={'white'}
                        data={mockDataTeam}
                        columnFieldsList={column}
                    />

                </Box>
            </Box>
        </Box>
    )
}


export default CourseRegistration