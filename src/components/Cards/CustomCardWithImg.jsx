import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react"
import { grey } from '@mui/material/colors';
import { Box } from '@mui/material';



const CustomCardWithImg = ({ cardContent }) => {
    const [content, setContent] = useState({ header: 'test', description: 'test' })

    useEffect(() => {
        setContent(cardContent)
    }, [cardContent])

    return (
        <Card sx={{ position: 'relative', margin: '1.5rem', marginRight: 2, display: 'flex', height: 120, overflow: 'visible', backgroundColor: '#1e1e1f', color: 'white', border: '1px solid white' }}>
            <Box>
                <CardMedia
                    sx={{ height: 80, width: 80, border: '1px solid gray', borderRadius: '20px', position: 'absolute', top: -20, left: -20 }}
                    image='/src/assets/images/logo.png'
                    component="img"
                    alt="green iguana"
                />
                <CardContent sx={{
                    overflow: 'hidden'
                }}>
                    <Typography gutterBottom variant="body1"
                        sx={{
                            overflow : 'hidden',
                            textOverflow: 'ellipsis',
                            paddingLeft: '4rem', margin: 0,
                            display: '-webkit-box', // For WebKit browsers
                            WebkitLineClamp: 1, // Number of lines to show
                            WebkitBoxOrient: 'vertical'
                        }}>
                        {content.header}
                    </Typography>
                    <Box>
                        <Typography variant="body2" sx={{
                            marginTop: '1.5rem',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'normal',
                            display: '-webkit-box', // For WebKit browsers
                            WebkitLineClamp: 1, // Number of lines to show
                            WebkitBoxOrient: 'vertical'
                        }}>
                            {content.description}
                        </Typography>
                    </Box>
                </CardContent>
            </Box>
        </Card>
    )
}

export default CustomCardWithImg