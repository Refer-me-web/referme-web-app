import { Box, Button, Grid, TextField } from "@mui/material"
import { yellow } from "@mui/material/colors"
import { useState } from "react"
import CustomButton from "./Button/CustomButton"


const ContactMe = () => {
  const [user, setUser] = useState({ firstName: '', lastName : '', email: '', contactNumber: '' })

  const handleSubmit = () => {
    console.log(user)
  }
  return (
    <Box>
      <Box>

      </Box>

      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <TextField
              fullWidth
              id="firstName"
              label="Enter first name"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <TextField
              fullWidth
              id="lastName"
              label="Enter last name"
              value={user.name}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              fullWidth
              id="contactNumber"
              label="Enter contact number"
              value={user.name}
              onChange={(e) => setUser({ ...user, contactNumber: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              fullWidth
              id="email"
              label="Enter email address"
              value={user.name}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Grid>
        </Grid>
        <CustomButton color={'white'} borderColor={'white'} onClick={handleSubmit}>
          Submit
        </CustomButton>
      </Box>
    </Box>
  )
}

export default ContactMe