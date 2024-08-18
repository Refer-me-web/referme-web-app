import { Box, Grid, Typography } from "@mui/material"
import { List, ListItem, ListItemText } from '@mui/material';
import CustomCardWithImg from './Cards/CustomCardWithImg'
import { useState } from "react";



const Portfolio = () => {

  const [currentFilter, SetCurrentFilter] = useState('all')

  const cardContent = [
    { header: 'Video Editing 101', description: 'Introduction to video editing techniques.', type: 'videos' },
    { header: 'Responsive Web Design', description: 'Learn to design responsive websites.', type: 'web' },
    { header: 'Advanced CSS', description: 'Deep dive into CSS for modern web apps.', type: 'web' },
    { header: 'JavaScript Essentials', description: 'Essential JavaScript concepts and patterns.', type: 'web' },
    { header: 'Full-Stack Web Development', description: 'Comprehensive guide to full-stack development.', type: 'web' },
    { header: 'Mobile App Development', description: 'Creating apps for iOS and Android.', type: 'app' },
    { header: 'React Native Basics', description: 'Build mobile apps with React Native.', type: 'app' },
    { header: 'App Deployment', description: 'Deploying apps to App Store and Google Play.', type: 'app' },
    { header: 'Cross-Platform App Development', description: 'Building apps that run on multiple platforms.', type: 'app' },
    { header: 'Video Production', description: 'From script to screen, video production guide.', type: 'videos' },
    { header: 'Motion Graphics', description: 'Animating graphics for videos.', type: 'videos' },
    { header: 'Graphic Design Basics', description: 'Introduction to graphic design principles.', type: 'graphics' },
    { header: 'Photoshop for Beginners', description: 'Learning the basics of Adobe Photoshop.', type: 'graphics' },
    { header: 'Advanced Illustrator', description: 'Mastering Adobe Illustrator for graphic design.', type: 'graphics' },
    { header: 'Graphic Design for Marketing', description: 'Using graphic design in marketing strategies.', type: 'graphics' }
  ];


  return (
    <Box sx={{ height: '100%' }}>
      <Typography variant="h6">Portfolio</Typography>
      <Box >
        <List sx={{ display: 'flex', marginLeft: '10%' }}>
          <ListItem onClick={() => SetCurrentFilter('all')} sx={{ cursor: 'pointer', padding: 0, margin: 0 }}>
            <ListItemText primary="All" />
          </ListItem>
          <ListItem onClick={() => SetCurrentFilter('web')} sx={{ cursor: 'pointer', padding: 0, margin: 0 }}>
            <ListItemText primary="Web sites" />
          </ListItem>
          <ListItem onClick={() => SetCurrentFilter('videos')} sx={{ cursor: 'pointer', padding: 0, margin: 0 }}>
            <ListItemText primary="Videos" />
          </ListItem>
          <ListItem onClick={() => SetCurrentFilter('graphics')} sx={{ cursor: 'pointer', padding: 0, margin: 0 }}>
            <ListItemText primary="Graphics" />
          </ListItem>
        </List>
      </Box>
      <Box sx={{ overflow: 'scroll', height: '30rem', border: '1px solid gray' }}>
        <Grid container spacing={3}>
          {
            cardContent.filter((oneCard) => currentFilter === 'all' ? oneCard : oneCard.type === currentFilter).map((oneCard) =>
              <Grid item xs={12} lg={4}>
                <CustomCardWithImg cardContent={oneCard} />
              </Grid>)
          }
        </Grid>

      </Box>
    </Box>
  )
}

export default Portfolio