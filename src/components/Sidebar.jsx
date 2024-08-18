import { Box, Divider, Typography } from "@mui/material";
import ImageBox from "./ImageBox";
import { Email, Phone, Web, LocationOn, GitHub } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const iconMap = {
    email: <Email />,
    contact: <Phone />,
    website: <Web />,
    address: <LocationOn />,
    github: <GitHub />,
};


const Sidebar = () => {
    const contactDetails = [
        { imgKey: 'email', imgAlt: 'logo', title: 'email', subTitle: 'mail' },
        { imgKey: 'contact', imgAlt: 'logo', title: 'contact', subTitle: '917720808013' },
        { imgKey: 'website', imgAlt: 'logo', title: 'website', subTitle: 'askit.com' },
        { imgKey: 'address', imgAlt: 'logo', title: 'address', subTitle: 'pune' },
        { imgKey: 'github', imgAlt: 'logo', title: 'github', subTitle: 'git' },
        { imgKey: 'email', imgAlt: 'logo', title: 'email', subTitle: 'mail' },
        { imgKey: 'contact', imgAlt: 'logo', title: 'contact', subTitle: '917720808013' },
        { imgKey: 'website', imgAlt: 'logo', title: 'website', subTitle: 'askit.com' },
        { imgKey: 'address', imgAlt: 'logo', title: 'address', subTitle: 'pune' },
        { imgKey: 'github', imgAlt: 'logo', title: 'github', subTitle: 'git' }
    ];

    // return (
    //     <div style={{ height: '400px', width: '400px', backgroundColor: 'red' }}>
    //         <div>
    //             {
    //                 <ImageBox height={'7rem'} width={'7rem'}>
    //                     {<AccountCircleIcon />}
    //                 </ImageBox>
    //             }
    //         </div>
    //         <div style={{ overflow: 'scroll', height: '200px' }}>
    //             {
    //                 contactDetails.map((one, index) => (<div key={index}><h4>{one?.title}</h4><p>{one.subTitle}</p></div>))
    //             }
    //         </div>

    //     </div>
    // )

    return (
        <Box sx={{ height: '80vh', width: '20vw', backgroundColor: '#1e1e1f', padding: '1rem', border: '1px solid gray', borderRadius: '20px', margin: '1rem' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0.5rem' }}>
                <ImageBox height={'7rem'} width={'7rem'}>
                    {<AccountCircleIcon />}
                </ImageBox>
            </Box>
            <Divider sx={{ border: '1px solid gray ' }} />
            <Box sx={{ height: '70%', overflow: 'scroll', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                {contactDetails.map((oneDetail, index) => (
                        <Box sx={{ display: 'flex', alignItems: 'center', margin: '1rem' }} key={index}>
                            <Box>
                                <ImageBox key={index} height={'10px'} width={'20px'}>
                                    {iconMap[oneDetail?.imgKey]}
                                </ImageBox>
                            </Box>
                            <Box sx={{ marginLeft: '1rem' }}>
                                <Typography sx={{ opacity: '0.5' }}>
                                    {oneDetail.title}
                                </Typography>
                                <Typography >
                                    {oneDetail.subTitle}
                                </Typography>

                            </Box>
                        </Box>
                )
                )}
            </Box>
        </Box>
    );
}

export default Sidebar