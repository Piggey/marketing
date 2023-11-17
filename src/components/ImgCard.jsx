/* eslint-disable react/prop-types */
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function ImgCard({ heading, content, additionalInfo, imgSrc }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="div"
          sx={{
            pt: "100%",
          }}
          image={imgSrc}
        />
        <CardContent sx={{ flexGrow: 1, mb: -2 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {heading}
          </Typography>
          <Typography>{content}</Typography>
          <Typography color="primary">{additionalInfo}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
