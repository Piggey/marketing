import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ImgCard from "../components/ImgCard";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// do podjebania
// https://github.com/mui/material-ui/blob/v5.14.18/docs/data/material/getting-started/templates/blog/Blog.js

export default function Home() {
  return (
    <main>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Album layout
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Main call to action</Button>
            <Button variant="outlined">Secondary action</Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <ImgCard key={card} heading="heading" content={"content"} imgSrc="https://source.unsplash.com/random?wallpapers" />
          ))}
        </Grid>
      </Container>
    </main>
  );
}
