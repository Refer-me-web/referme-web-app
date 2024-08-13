import { Box } from '@mui/material'

// eslint-disable-next-line react/prop-types
const ImageBox = ({ height, width, children }) => {
    return (
        <Box sx={{ display: 'flex', alignItems : 'center', justifyContent : 'center',  backgroundColor: '#', border: '1px solid gray', borderRadius: '20px', height: height, width: width, padding: '2rem' }}>
            {children}
        </Box>
    )
}

export default ImageBox