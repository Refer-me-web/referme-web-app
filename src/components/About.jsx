import { Box, Divider, Grid, Paper, Typography } from "@mui/material"
import CustomCard from "./Cards/CustomCard"
import CustomCardWithImg from "./Cards/CustomCardWithImg"

const About = () => {

    const cardContent = [
        { header: 'Web design', description: 'The most modern and high-quality design made at a professional level' },
        { header: 'Web development', description: 'The most modern and high-quality design made at a professional level' },
        { header: 'Mobile apps', description: 'The most modern and high-quality design made at a professional level' },
        { header: 'Photography', description: 'The most modern and high-quality design made at a professional level' },
    ]

    const testimonials = [
        { header: 'Aman', description: 'The most modern and high-quality design made at a professional level' },
        { header: 'Azam', description: 'The most modern and high-quality design made at a professional level' },
        { header: 'Shayna', description: 'The most modern and high-quality design made at a professional level' },
        { header: 'didi', description: 'The most modern and high-quality design made at a professional level' },
        { header: 'attu', description: 'The most modern and high-quality design made at a professional level' },
    ]

    const clients = [
        { header: 'Aman', description: 'The most modern and high-quality design made at a professional level', logo: '/src/assets/images/logo.png' },
        { header: 'Azam', description: 'The most modern and high-quality design made at a professional level', logo: '/src/assets/images/logo.png' },
        { header: 'Shayna', description: 'The most modern and high-quality design made at a professional level', logo: '/src/assets/images/logo.png' },
        { header: 'didi', description: 'The most modern and high-quality design made at a professional level', logo: '/src/assets/images/logo.png' },
        { header: 'attu', description: 'The most modern and high-quality design made at a professional level', logo: '/src/assets/images/logo.png' },
    ]

    const content = ` I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.`
    return (
        <>
            <Box>
                <Typography variant="h4">
                    About page
                </Typography>
                <p>
                    {content}
                </p>
                <Grid container spacing={3}>
                    {cardContent.map((oneCard, index) => (
                        <Grid item xs={6} key={index}>
                            <CustomCard cardContent={oneCard} />
                        </Grid>
                    ))}
                </Grid>

                <Divider sx={{ border: '1px solid gray' }} />
                <Typography variant="h4">
                    Testimonials
                </Typography>
                <Box sx={{
                    overflowX: 'auto',
                    '&::-webkit-scrollbar': {
                        height: '8px',
                        width: '0.8px'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'yellow',
                        borderRadius: '10px',
                    }
                    , display: 'flex'
                }}>
                    <Grid container spacing={3} sx={{ display: 'flex', flexWrap: 'nowrap' }}>
                        {testimonials.map((oneCard, index) => (
                            <Grid item xs={6} key={index} sx={{ flex: '0 0 auto', width: 'auto' }}>
                                <CustomCardWithImg cardContent={oneCard} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Divider sx={{ border: '1px solid gray' }} />
                <Typography variant="h4">
                    Clients
                </Typography>
                <Box sx={{
                    overflowX: 'auto', display: 'flex',
                    '&::-webkit-scrollbar': {
                        height: '8px',
                        width: '8px'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'yellow',
                        borderRadius: '10px',
                    }
                }}>
                    <Grid container spacing={3} sx={{ display: 'flex', flexWrap: 'nowrap', margin: 2 }}>
                        {
                            clients.map((oneClient) =>
                                <Grid item xs={3} lg={3}><img style={{ borderRadius: '20px' }} height="200px" width='200px' src={oneClient?.logo} alt="LoGO" /></Grid>)
                        }
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default About