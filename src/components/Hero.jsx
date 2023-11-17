/* eslint-disable react/prop-types */
import { Typography, Paper, Box, Grid } from "@mui/material";

export default function Hero({ imgSrc, title, description }) {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "white",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${imgSrc})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={imgSrc} alt={title} />}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <Grid>
        <Box
          sx={{
            position: "relative",
            p: { xs: 3, md: 7 },
            pr: { md: 0 },
          }}
        >
          <Typography component="h1" variant="h1" color="inherit" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h4" color="inherit" paragraph>
            {description}
          </Typography>
        </Box>
      </Grid>
    </Paper>
  );
}
