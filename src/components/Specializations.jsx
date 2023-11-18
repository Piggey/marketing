/* eslint-disable react/prop-types */
import { Grid, Box, Typography } from "@mui/material";

export default function Specializations({ specList }) {
  return (
    <Grid container spacing={3} sx={{ marginX: "auto", maxWidth: 1000 }}>
      <Typography sx={{ mt: 12 }} variant="h2">Nasze specjalizacje</Typography>
      {specList.map((spec, index) => (
        <Grid item xs={12} key={index}>
          <Box sx={{ marginY: 2 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {spec.specialization}
            </Typography>
            <Typography variant="body1" paragraph>
              {spec.description}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Zakres naszych doświadczeń w tym obszarze obejmuje m.in.:
            </Typography>
            <ul>
              {spec.areas.map((area, areaIndex) => (
                <li key={areaIndex}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {area.name}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {area.description}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
