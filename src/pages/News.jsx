import { Grid } from "@mui/material";
import Article from "../components/Article";
import { articles } from "../data/articles";
import Hero from "../components/Hero";

export default function News() {
  return (
    <>
      <Hero imgSrc="src/assets/news.jpg" imgYOffset={"47%"} title="Aktualności" />
      <Grid container spacing={5} sx={{ mt: 3, ml: 5 }}>
        {articles.map((article, index) => (
          <Article key={index} author={article.author} title={article.title} content={article.content} date={article.date} tags={article.tags} />
        ))}
      </Grid>
    </>
  );
}
