import { Container, Grid } from "@mui/material";
import ImgCard from "../components/ImgCard";
import { team } from "../data/team";
import Hero from "../components/Hero";

export default function About() {
  return (
    <>
      <Hero imgSrc="src/assets/about.jpeg" imgYOffset="26%" title="O nas" description="Poznaj nasz zespół" />
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {team.map((member, index) => (
            <ImgCard
              key={index}
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
