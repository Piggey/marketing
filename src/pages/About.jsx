import { Container, Grid } from "@mui/material";
import ImgCard from "../components/ImgCard";
import { team } from "../data/team";

export default function About() {
  return (
    <>
      <div>twoja stara</div>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {team.map((member) => (
            <ImgCard
              key={member}
              heading={member.name}
              content={member.description}
              additionalInfo={member.phoneNumber}
              imgSrc={member.imgSrc}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}
