import { Box } from '@mui/material'

const Navigation = () => {
    return (
        <Box
        sx={{
        }}
        >
            <ul style={{ position: 'absolute', marginLeft : '2rem', marginBottom : '1rem', cursor : 'pointer', marginRight : '2rem',  bottom: 0, left: 0, right: 0, height: '60px', borderRadius: '50px', backgroundColor: 'white', color: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: 0, listStyle: 'none' }}>
                <li style={{ padding: 0, margin: 0 }}>About</li>
                <li style={{ padding: 0, margin: 0 }}>Resume</li>
                <li style={{ padding: 0, margin: 0 }}>Portfolio</li>
                <li style={{ padding: 0, margin: 0 }}>Blog</li>
                <li style={{ padding: 0, margin: 0 }}>Contact</li>
            </ul>
        </Box>
    )
}

export default Navigation