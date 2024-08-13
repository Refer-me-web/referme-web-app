/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../components/Sidebar'
import { Box } from '@mui/material'
import ContentBox from '../components/ContentBox'

const Home = () => {

  return (
    <Box sx={{ height : '100vh',display: 'flex', alignItems: 'center', backgroundColor : '#000000' }}>
        <Sidebar />
        <ContentBox />
    </Box>
  )
}

export default Home