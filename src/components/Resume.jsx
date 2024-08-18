import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material';
import CustomStepper from './Stepper/CustomStepper';


const stepsData = [
  {
    head: 'Maharashtra Vidyalaya, barshi (Maharashtra state board – pune board)',
    sub_head: 'Passout - march 2015',
    percent: 'Percentage (%)- 75.40'
  },
  {
    head: 'SSMB, barshi (Maharashtra state board – pune board)',
    sub_head: 'Passout - feb 2017',
    percent: 'Percentage (%)- 55.38'
  },
  {
    head: 'B.P. sulakhe commerce college KIT (Solapur university)',
    sub_head: 'Passout - june 2021',
    percent: 'Percentage (%)- 77.56'
  },
  {
    head: 'SINHAGAD INSTITUTE OF TECHNOLOGY, PUNE (SPPU)',
    sub_head: 'Passout - sept 2023',
    percent: 'Percentage (%)- 81.32'
  }
];

const Exprence = [
  {
    head: 'HORECA1 (2023-24)',
    sub_head: '2023-24',
    description: `During my tenure at HORECA (Hospitality, Restaurant, Catering), I spearheaded a transformative project aimed at developing a dynamic B2B platform for wholesale vendors and the hospitality industry. It is aimed at solving the unorganized transactions between these large industries to streamline the daily transactions and the process flows for Trading, helping them efficiently manage their transactions. The platform helps the vendors present their services and products to whole new customers as well as small vendors and resellers. Also customer to solve their end time needs and present them new vendors`
  },
  {
    head: 'Delivo (2022-23)',
    sub_head: '2022-23',
    description: `I held a pivotal role in spearheading the development of an advanced delivery platform, catering to three primary stakeholders: delivery person, hotels, and consumers. The platform's core focus was on optimizing operations for delivery person and enhancing management capabilities for hotels and hospitality services. It facilitated seamless coordination between delivery partners and hotel management, enabling efficient assignment of deliveries and real-time tracking of delivery personnel's live locations. This streamlined approach not only saved valuable time and resources but also enhanced the overall delivery experience fostering a collaborative and efficient ecosystem.`
  }
];

const Resume = () => {
  return (
    <Box sx={{ width: '100%', color: 'white' }}>
      <Typography sx={{ mt: 1, mb: 1 }} variant="h4">Resume</Typography>
      <Divider sx={{ border: '1px solid gray ' }} />
      <Box sx={{ margin: 2 }}>
        <CustomStepper steperHeading='Education' stepsData={stepsData} />
      </Box>
      <Divider sx={{ border: '1px solid gray ' }} />
      <Box sx={{ margin: 2 }}>
        <CustomStepper steperHeading='Experience' stepsData={Exprence} />
      </Box>
    </Box>
  )
}

export default Resume