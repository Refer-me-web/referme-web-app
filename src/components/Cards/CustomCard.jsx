import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react"


const CustomCard = ({ cardContent }) => {
    const [content, setContent] = useState({ header: 'test', description: 'test' })

    useEffect(() => {
        setContent(cardContent)
    }, [cardContent])

    return (
        <Card sx={{ margin: '1rem', display: 'flex', height: 120, overflow: 'hidden', backgroundColor: '#1e1e1f', color: 'white', border : '1px solid white' }}>
            <CardMedia
                image='/src/assets/images/logo.png'
                component="img"
                alt="green iguana"
            />
            <CardContent sx={{ color: 'white' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {content.header}
                </Typography>
                <Typography variant="body2">
                    {content.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CustomCard