import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SchoolIcon from '@mui/icons-material/School';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const CustomStepper = ({ steperHeading, stepsData }) => {

    console.log(`props`, steperHeading, stepsData)

    const [steps, setSteps] = useState([{
        head: '',
        sub_head: '',
        percent: '',
        description : ''
    }])

    useEffect(() => {
        setSteps(stepsData)
    }, [stepsData])

    return (
        <Stepper sx={{ mt: 1 }} activeStep={1} orientation="vertical">
            <Step>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{  filter: 'drop-shadow(0px 0px 10px yellow)', position: 'relative', left: -7, height: '40px', width: '40px', border: '1px solid white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <SchoolIcon />
                    </Box>
                    <Box>
                        <Typography variant="h6">{steperHeading}</Typography>
                    </Box>
                </Box>
            </Step>
            {steps.map((step, index) => (
                <Step active={true} key={index}>
                    <StepLabel icon={<FiberManualRecordIcon
                        sx={{
                            filter: 'drop-shadow(0px 0px 10px yellow)',
                        }}
                    />}
                        sx={{
                            '& .Mui-active': { color: 'white' }
                        }}
                    >{
                            <Box sx={{ color: 'white' }}>
                                <h2 style={{ padding: 0, margin: 0 }}>{step?.head}</h2>
                                <p style={{ padding: 0, margin: 0, color: 'yellow' }}>{step.sub_head}</p>
                                <p style={{ padding: 0, margin: 0 }}>{step.percent ?? step.description}</p>
                            </Box>
                        }</StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

export default CustomStepper