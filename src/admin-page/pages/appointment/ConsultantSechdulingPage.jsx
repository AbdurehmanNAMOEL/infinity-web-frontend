import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getConsultantAppointment } from '../../../redux/features/adminSlice'
import GridTable from '../../components/GridTable'
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import { mockDataTeam } from '../../DummyData/data'

const ConsultantSechdulingPage = ({ closeDrawer, isDrawerOpen }) => {
  const dispatch = useDispatch()

    const {consultantUserList}= useSelector(state=>state.admin)

    useEffect(()=>{
        dispatch(getConsultantAppointment())
    },[])

    console.log()

  
 const column = [
        { field: "name", headerName: "Name", flex: 1, cellClassName: 'name-column-cell' },
        { field: "phoneNumber", headerName: "Phone Number", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "officeLocationId", headerName: "officeLocationId",flex: 1 },
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
                {consultantUserList?.length>0?
                <Box sx={{ width: '90%', marginLeft: '5%', marginTop: '80px' }}>

                    <GridTable
                        colors={'white'}
                        data={consultantUserList}
                        columnFieldsList={column}
                    />

                </Box>:
                <Typography variant='h4' sx={{marginTop:'80px',color:'#1e1e1e',textAlign:'center'}}>
                    you don't have a consulates yet
                </Typography>
                }
            </Box>
        </Box>
    )
}

export default ConsultantSechdulingPage