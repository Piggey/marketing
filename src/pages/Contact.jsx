import { Typography, Container, Grid } from '@mui/material';
import Hero from "../components/Hero";
import OpenStreetMapWindow from '../components/OpenStreetMapWindow';

export default function Contact() {
  const tuolCoords = [51.74724551588659, 19.45381348972098];

  return (
    <>
      <Hero imgSrc="src/assets/contact.jpg" title="Kontakt" />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2} sx={{ mb: 10}}>
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" sx={{ mb: 1 }}>
              Adres:
            </Typography>
            <Typography variant="body2">Wólczańska 215, 90-924 Łódź</Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" sx={{ mb: 1 }}>
              Telefon:
            </Typography>
            <Typography variant="body2">42 631 36 00</Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" sx={{ mb: 1 }}>
              Email:
            </Typography>
            <Typography variant="body2">w-7@adm.p.lodz.pl</Typography>
          </Grid>
        </Grid>
        <Typography variant="h3" sx={{ mb: 2, textAlign: 'center' }}>
          Nasza Lokalizacja
        </Typography>
        <OpenStreetMapWindow coords={tuolCoords}/>
    </Container>
    </>
  );
}
