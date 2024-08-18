/* eslint-disable no-unused-vars */
/* eslint-disable no-duplicate-case */

import { Box, Typography } from "@mui/material"
import Navigation from "./Navigation"
import { useState } from "react"
import About from "./About"
import Resume from "./Resume"
import Portfolio from "./Portfolio"
import Blog from "./Blog"
import ContactMe from "./ContactMe"
import Nosection from "./Nosection"



const sectionComponents = {
    about: About,
    resume: Resume,
    blog: Blog,
    contact: ContactMe,
    portfolio: Portfolio,
    home: Nosection
};


const ContentBox = () => {

    const [currentSection, setCurrentSection] = useState('home')

    const RenderSection = sectionComponents[currentSection] || sectionComponents.home;

    return (
        <Box sx={{ backgroundColor: '#1e1e1f', position: 'relative', margin: '2rem', border: '1px solid gray ', borderRadius: '20px', height: '90vh', width: '70vw' }}>
            <Box sx={{ height: ' 87%', overflow: 'scroll' }}>
                <Box style={{ padding: '1rem' }}>
                    {<RenderSection />}
                </Box>
            </Box>
            <Box>
            </Box>
            <Navigation setCurrentSection={setCurrentSection} />
        </Box>
    )
}

export default ContentBox