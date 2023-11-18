/* eslint-disable react/prop-types */
import { Typography, Paper, Box, Grid } from "@mui/material";

export default function Hero({ imgSrc, imgYOffset, title, description }) {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "white",
        mb: 4,
        height: 400,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: `${imgYOffset}`,
        backgroundImage: `url(${imgSrc})`,
      }}
    >
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
            p: { xs: 3, md: 3 },
          }}
        >
          <Typography component="h1" variant="h1" color="inherit" fontFamily="Montserrat" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h4" color="inherit" fontFamily="Montserrat" paragraph>
            {description}
          </Typography>
        </Box>
      </Grid>
    </Paper>
  );
}
