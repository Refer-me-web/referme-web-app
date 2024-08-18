/* eslint-disable react/prop-types */
import { Box } from '@mui/material'

const Navigation = ({ setCurrentSection }) => {
    return (
        <Box
            sx={{
            }}
        >
            <ul style={{ position: 'absolute', marginLeft: '2rem', marginBottom: '1rem', cursor: 'pointer', marginRight: '2rem', bottom: 0, left: 0, right: 0, height: '60px', borderRadius: '50px',backgroundColor: '#1e1e1f', border : '1px solid gray', color: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: 0, listStyle: 'none' }}>
                <li
                    key="about"
                    onClick={() => setCurrentSection('about')}
                    style={{ padding: 0, margin: 0 }}
                >
                    About
                </li>
                <li
                    key="resume"
                    onClick={() => setCurrentSection('resume')}
                    style={{ padding: 0, margin: 0 }}
                >
                    Resume
                </li>
                <li
                    key="portfolio"
                    onClick={() => setCurrentSection('portfolio')}
                    style={{ padding: 0, margin: 0 }}
                >
                    Portfolio
                </li>
                <li
                    key="blog"
                    onClick={() => setCurrentSection('blog')}
                    style={{ padding: 0, margin: 0 }}
                >
                    Blog
                </li>
                <li
                    key="contact"
                    onClick={() => setCurrentSection('contact')}
                    style={{ padding: 0, margin: 0 }}
                >
                    Contact
                </li>
            </ul>
        </Box>
    )
}

export default Navigation