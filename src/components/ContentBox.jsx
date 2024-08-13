
import { Box, Typography } from "@mui/material"
import Navigation from "./Navigation"


const ContentBox = () => {
    return (
        <Box sx={{backgroundColor : '#1e1e1f', position: 'relative', margin: '2rem', border: '1px solid gray ', borderRadius: '20px', height: '90vh', width: '100vw' }}>
            <Box
                sx={{ height: ' 87%', overflow: 'scroll' }}
            >
                <Box style={{ padding: '1rem' }}>
                    <Typography variant="h6">About me</Typography>
                </Box>
            </Box>
            <Box>
            </Box>
            <Navigation />
        </Box>
    )
}

export default ContentBox