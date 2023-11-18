import Hero from "../components/Hero";
import Specialization from "../components/Specialization";
import { Grid, Typography } from "@mui/material";
import { specializations } from "../data/specializations";

// do podjebania
// https://github.com/mui/material-ui/blob/v5.14.18/docs/data/material/getting-started/templates/blog/Blog.js

export default function Home() {
  return (
    <main>
      <Hero imgSrc="src/assets/home.jpg" imgYOffset="14%" title="Kancelaria Prawna" description="Polska Kancelaria, Globalny Zasięg, Indywidualne Podejście" />
      <Grid container spacing={3} sx={{ marginX: "auto", maxWidth: 1000 }}>
        <Typography sx={{ mt: 12 }} variant="h2">Nasze specjalizacje</Typography>
        {specializations.map((spec, index) => (
          <Specialization key={index} spec={spec} />
        ))}
      </Grid>
    </main>
  );
}
