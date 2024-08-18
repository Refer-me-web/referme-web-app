import { Box, Grid } from "@mui/material"
import CustomblogCard from "./Blogcards/CustomblogCard"


const Blog = () => {
  const blogContent = [
    { date: Date.now(), heading: 'first', description: 'description' },
    { date: Date.now(), heading: 'first', description: 'description' },
    { date: Date.now(), heading: 'first', description: 'description' },
    { date: Date.now(), heading: 'first', description: 'description' },
    { date: Date.now(), heading: 'first', description: 'description' },
    { date: Date.now(), heading: 'first', description: 'description' },
    { date: Date.now(), heading: 'first', description: 'description' }
  ]
  return (
    <Box>
      <Grid container spacing={3}>
        {
          blogContent.map((oneBlog) =>
            <Grid item xs={12} lg={6}>
              <CustomblogCard content={oneBlog} />
            </Grid>)
        }
      </Grid>
    </Box>

  )
}

export default Blog