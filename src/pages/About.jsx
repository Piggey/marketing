import { Container, Grid } from "@mui/material";
import ImgCard from "../components/ImgCard";
import { team } from "../data/team";
import Hero from "../components/Hero";

export default function About() {
  return (
    <>
      <Hero imgSrc="https://placekitten.com/800/400" title="O nas" description="Lorem Ipsum huj w dupe" />
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
