import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({ position, right, margin, color, borderColor, backgroundColor, variant, onClick, children }) => {
    return (
        <Button
            sx={{
                position: position ?? 'absolute',
                right: right ?? 0,
                margin: margin ?? 2,
                color: color ?? 'yellow',
                borderColor: borderColor ?? 'yellow',
                backgroundColor: backgroundColor ?? 'transparent',
                '&:hover': {
                    backgroundColor: backgroundColor ?? 'transparent',
                    borderColor: backgroundColor ?? 'yellow',
                },
                '&:active': {
                    backgroundColor: backgroundColor ?? 'transparent',
                    borderColor: backgroundColor ?? 'yellow',
                },
                '&:disabled': {
                    color: 'grey',
                    borderColor: 'grey',
                }
            }}
            variant={variant ?? "outlined"}
            onClick={onClick}
        >
            {children}
        </Button>

    )
}

export default CustomButton