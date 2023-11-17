import { Box, Typography } from "@mui/material"
import Copyright from "./Copyright"

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Projekt strony kancelarii prawnej
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Marketing internetowy - Politechnika Łódzka
      </Typography>
      <Copyright />
    </Box>
  )
}
