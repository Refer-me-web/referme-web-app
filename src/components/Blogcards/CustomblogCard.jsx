import { Box, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'

const CustomblogCard = ({ content }) => {
    console.log("CON", content)
    const [blogContent, setBlogContent] = useState({ date: "date", heading: 'first', description: 'description' })
    useEffect(() => {
        setBlogContent(content)
    }, [content])
    return (
        <Box sx={{ border: '1px solid gray', padding: '2rem', borderRadius: '20px' }}>
            <Box>
                <img style={{ margin: '10px' }} src="/src/assets/react.svg" height="100px" width="200px" />
                <Divider sx={{ border: '1px solid gray' }} />
                <Box>
                    <p>{blogContent?.date}</p>
                    <h1>{blogContent?.heading}</h1>
                    <p>{blogContent?.description}</p>
                </Box>
            </Box>
        </Box>
    )
}

export default CustomblogCard